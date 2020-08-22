function isEmpty(o) {
    core.mustBe.defined(o)
    return o === ''
        || o === null
        || (core.in.isArr(o) && o.length === 0)
        || (core.in.isObj(o) && (
            (typeof Object.keys === 'function'
                && Object.keys(o).length === 0
                && o.constructor === Object
            )
            || ((function(){
                for (var i in o) {
                    if (o.hasOwnProperty(i)) return false
                }
            })())
        ))

}