import jwt from 'jsonwebtoken'

// doctor authentication middleware
const authDoctor = async (req,res,next) => {
    try {

        const { dtoken } = req.headers
        if (!dtoken) {
            return res.json({success:false,message:"Non autorisé. Veuillez vous reconnecter."})
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
        req.docId = token_decode.id; 
        next()

        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
    
}

export default authDoctor