module.exports = (req, res) => {
    console.log(req.params.username)
    const models = 
        {
            username: "rahul",
            age: 19
        };
  
    res.status(200).json( models );
  };