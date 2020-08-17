import { Component, OnInit , forwardRef } from '@angular/core';
import { ControlValueAccessor , NG_VALUE_ACCESSOR , NG_VALIDATORS, FormBuilder, FormGroup} from '@angular/forms'
import { map ,  filter , startWith , debounceTime,distinctUntilChanged} from 'rxjs/operators';
import { combineLatest , merge } from 'rxjs';
@Component({
  selector: 'app-age-input',
  templateUrl: './age-input.component.html',
  styleUrls: ['./age-input.component.scss'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>AgeInputComponent),
      multi:true
    },
    {
      provide:NG_VALIDATORS,
      useExisting:forwardRef(()=>AgeInputComponent),
      multi:true
    }
  ]
})

export enum AgeUnit {
  Year = 0,
  Month,
  Day
}

export interface Age {
  age: number,
  unit: AgeUnit
}

export class AgeInputComponent implements ControlValueAccessor {
  form:FormGroup
  private propagateChange = (_:any)=>{}
  constructor(private fb:FormBuilder) { }
  ngOnInit(){
    this.form = this.fb.group({
      birthday:[],
      age:this.fb.group({
        ageNum:[],
        ageUnit:[]
      })
    })
    const birthday = this.form.get('birthday');
    const ageNum = this.form.get('age').get('ageNum');
    const ageUnit = this.form.get('age').get('ageUnit');

    const birthday$ = birthday.valueChanges.pipe(
      map(d=>{
            return {data:d,from:'birthday'}
      }),
      filter(_=>birthday.valid)
    );
    const ageNum$ = ageNum.valueChanges.pipe(
      startWith(ageNum.value),
      debounceTime(300),
      distinctUntilChanged()
    );
    const ageUnit$ = ageUnit.valueChanges.pipe(
      startWith(ageUnit.value),
      debounceTime(300),
      distinctUntilChanged()
    );
    const age$ = combineLatest(ageNum$,ageUnit$,(_n,_u) => {
      return this.toDate({age:_n,util:_n});
    }).pipe(
      map(d=>{
      return {data:d,from:'age'}
    }),
      filter(_=>this.form.get('age').valid)
    )
    const merged$ = merge(birthday$,age$).pipe(
      filter(_=>this.form.valid)
    );
    merged$.subscribe(d=>{
      const age = this.toAge(d.date);
      if(d.from==='birthday'){
        if(age.age!==ageNum.value){
          ageNum.patchValue(age.age,{emitEvent:false})
        }
        if(age.unit!==ageUnit.value){
          ageUnit.patchValue(age.unit,{emitEvent:false})
        }
        this.propagateChange(d.date)
      }else{
        const ageToCompare = this.toAge(birthday.value);
        if(age.age !== ageToCompare.age || age.unit !== ageToCompare.unit){
          birthday.patchValue(d.date , {emitEvent : false});
          this.propagateChange(d.date)
        }
      }
    })
  }
  toAge(){

  }
  toDate(){

  }
  writeValue(obj:any):void{
  }
  registerOnChange(fn:any):void{
    this.propagateChange = fn;
  }
  registerOnTouched(fn:any):void{

  }

}
