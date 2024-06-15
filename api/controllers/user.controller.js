const test = (req, res)=>{
    res.status(200).json({
        status: 200,
        message: "Api is working"
    })
}

export { test }