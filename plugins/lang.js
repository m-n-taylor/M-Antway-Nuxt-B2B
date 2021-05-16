export default (context, inject)=>{
    // const hello=(msg)=>console.log(`Hello ${msg}!`)
    // console.log("lang plugin", context.app.$lang)
    const ll={"new": "NEW"}
    inject('lang', ll)
    context.$lang=ll
}
// update: 2025-07-31T19:38:02.089465

// update: 2025-07-31T19:45:10.936504

// update: 2025-07-31T19:51:10.147361

// update: 2025-07-31T19:52:15.525742

// update: 2025-07-31T19:57:01.812678

// update: 2025-07-31T19:59:35.765567
