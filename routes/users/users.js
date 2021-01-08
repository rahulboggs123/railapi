module.exports = (req, res) => {
    const models = [
        {
            username: "rahul",
            age: 19
        },
        {
            username: "rahul2",
            age:19
        }
    ];
  
    res.status(200).json({ models });
  };