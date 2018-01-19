/*
Validaciones
1. crea un formulario típico de login en el HTML, con dos campos usuario y contraseña -HECHO
2. Haz que cuando se pulse el botón de enviar el formulario valide si el nombre de usuario y la contraseña están rellenados o no y sólo si es así deje enviar el formulario, en caso contrario deberá informar al usuario de qué campo o campos faltan por rellenar. - HECHO
3. Haz el típico formulario de registro con los campos: nombre, email, repetir email, contraseña, repetir contraseña y aceptar condiciones del servicio. Con el botón de enviar el formulario
4. Valida el formulario, haciendo que el nombre tenga al menos 2 caracteres y sea requerido, el email sea valido y coincida en ambos campos, la contraseña tenga al menos 8 caracteres y coincidan y haya aceptado las condiciones del servicio.
(validador equalTo())
*/


function init (){
    console.log ("DOM Cargado JQuery");
    $("#form").validate();
    $("#form2").validate({
        rules:{
            nombre:{
                required:true,
                minlength:2
            },
            email:{
                required:true,
                equalTo:"#email2"
            },
            pass:{
                required:true,
                equalTo:"#pass2" 
            },
            aceptar:{
                required:true
            }
        },
        messages:{
            nombre:"Por favor, introduzca un nombre",
            email:{
                required:"Necesitamos su email para ponernos en contacto con usted",
                email:"su email debe tener formato similar a usuario@gmail.com",
            },
            email2:{
                required:"Debe repetir su email",
                email:"su email debe tener formato similar a usuario@gmail.com",
            },
            password:{
                required:"Debe introducir su contraseña"
            }
        }
    });
    
    
}
$ ("document").ready(init);