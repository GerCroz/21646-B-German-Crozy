export const validation = (req, res, next) => {
    const { title, content, link } = req.body;

   if(title === "" || content === "" || link === ""){
     return res.status(404).json({
        messag: "vacio"
     })
   }

   

   next()
}