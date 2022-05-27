const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../../db/models')

router.post('/', async (req, res) => {
  const {
    name,
    email,
    password,
    password2,
    role,
  } = req.body;
  console.log(req.body)
  const user = await User.findOne({
    where: {
      email,
    },
  });
  console.log(user);
  if (user) {
    res.status(401).json({
      text: 'Такой пользователь уже зарегистрирован',
    });
  } else if (password !== password2) {
    res.status(401).json({
      text: 'Пароли не совпадают',
    });
  } else {
    if(role){
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: "Организатор",
      });
      
     res.json({message:"Организатор!!"})
    
 
    } else {
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: "Пользователь",
      });
     
     res.json({message:"Пользователь !!"})
    
     
    }
 
  }
});




module.exports = router;
