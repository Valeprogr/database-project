const db = require("../db");


const getAllUsers =async(req, res) =>{
    try{
        const results = await db.query('SELECT * FROM users;');
        res.json(results.rows);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

const createUser = async( req, res) =>{
    try {
     const {id ,first_name, last_name} = req.body;
       if(!id || !first_name || !last_name) throw new Error('All filds are requeried')
        const { rows: [newUser]}=
         await db.query(`INSERT INTO users (id, first_name, last_name) VALUES ($1 , $2, $3) RETURNING *`, [id, first_name, last_name])
        res.json(newUser)
        }catch(error){
            console.log(error)
            res.status(500).json({error: error.message});
        };
}

const getSingleUser = async(req, res) =>{
    try{
        const {params: {id}} = req;
        const {rowCount, rows: [user]}=
        await db.query(`SELECT * FROM users WHERE id = $1`, [id]);
        res.json(user);
    }catch(error){
        res.status(500).json({ error : error.message});
    }
};

const updateUser = async (req,res) =>{
    try{

    }catch{res.status(500).json({error : error.message})}
};

const deleteUser = async(req, res)=>{
    try{

    }catch(error){
        res.status(500).json({ error: error.message})
    }
}

module.exports ={ createUser, getSingleUser ,getAllUsers , updateUser , deleteUser};