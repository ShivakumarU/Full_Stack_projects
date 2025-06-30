import ratelimit from "../config/upstash.js";


const rateLimiter = async(req, res, next)=>{
    try {
        if (req.method !== "GET") return next();
        const identifier = req.ip || req.headers["x-forwarded-for"] || "anonymous";
        const {success} = await ratelimit.limit(identifier)
        if(!success){
            return res.status(429).json({message: "Too many requests, please try again later"});
        }
        next();
    } catch (error) {
        console.log("Rate limit Error", error);
        next();
    }
}

export default rateLimiter;