import { STATEMENTS } from '../../constants'  

export default (function(){
    return {
        name: STATEMENTS.GT,
        constructor: function(arg){
            this._values.push(`${this._fullColName}>`)
            this._params.push(arg)
        }
    }
})()