const SignUpValidation=(name:string,value:string)=>{
    switch(name){
        case "name": if(value.length==0) return "Name is Required";
         return "";

        case "email": if(value.length==0) return "Email is Required";
                      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is invalid";                      
                       return "";

         case "password": if(value.length==0) return "password is Required";
                          if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(value)) return "password is invalid";

                        return "";

            default: return "";

    }


}

const LoginValidation=(name:string,value:string)=>{
    switch(name){
       
        case "email": if(value.length==0) return "Email is Required";
                       return "";

         case "password": if(value.length==0) return "password is Required";

                        return "";

            default: return "";

    }

}
export {SignUpValidation,LoginValidation};