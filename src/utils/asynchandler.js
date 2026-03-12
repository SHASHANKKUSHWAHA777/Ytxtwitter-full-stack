const asynchandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler).
        catch((err) => next(err))
    }
}

export { asynchandler }

//const asynchandler = () => {}
//const asynchandler = (func) => () => {}
//const asynchandler = (func) => async() => {}



    //TRY CATCH ASYNCHANDLER

//const asynchandler = (fn) => async (req,res,next) => {
 //   try {
 //       await next(req,res,next)
//    } catch (error) {
 //       res.status(error.code || 500).json({
 //           success : false,
     //       message : err.message
     //   })
 //   }
//}




//PROMISE ASYNCHANDLER