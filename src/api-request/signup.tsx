import axios from 'axios'
//import config from './config'

const signup = async (data:any) => {
    const {username, password, email, confirmPassword, mobile} = data

        const newData = JSON.stringify({
            "username":username, 
            "password":password,
            "email": email,
            "confirm_password": confirmPassword,
            "phone_no": mobile,
            "default_user_type":1


          });
        
          try {
            const response = await axios(
              
              {
              method:'POST',
              //url: `${config.API_DOMAIN_URL}/auth/signup`,
              headers: { 
            //   'Authorization': `Bearer ${token}`, 
              'Content-Type': 'application/json'
              },
              data : newData
              }
            );
    
            const responseData = await response.data;
            console.log(responseData);
            return responseData
          } catch (err:any) {
            console.log(`${err.message}`)
          }
}

export {signup}