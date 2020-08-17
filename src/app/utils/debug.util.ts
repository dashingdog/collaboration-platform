import { tap } from 'rxjs/operators';
import {environment} from '../../environments/environment'
const debug=(message)=>{
  return source=>{
    return source.pipe(tap((next)=>{
            if(!environment.production)
            console.log(message,next)
          },
          (err)=>{
            if(!environment.production)
            console.log('ERROR>>',message,err)
          },
          ()=>{
            if(!environment.production)
            console.log('Completed - ')
          },))
  }
}
// Observable.prototype.debug = function(message:string){
//   return this.do(
//
//   )
// }
export {debug}
