const router = require('express').Router();
const bcrypt = require('bcrypt');
const {User} = require('../../db/models')

router.get('/',(req,res)=>{

  const user = req.session.user;
res.json({user})

})


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
  




  if (user) {
    res.json({
      text: 'false',
    });
  } else if (password !== password2) {
    res.json({
      text: 'false',
    });
  } else {

    if(role){
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: "Организатор",
      });
      
 
     
      res.json({text:"true"})
      
    } else {
      const newUser = await User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
        role: "Пользователь",
      });
     
    
      
      res.json({text:"true"})
     
    }
 
  }




  
});




module.exports = router;
