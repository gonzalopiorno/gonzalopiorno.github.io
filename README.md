<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Curriculum</title>
    <link rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/3135/3135800.png">
    <link rel="stylesheet" type="text/css" href="CSS/index.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body>
    <header>
        <nav>
            <h1 id="cv">Curriculum Vitae</h1>
        </nav>

    </header>

    
    <div class="contenedor2">
        <div class="imagen">
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Es una imagen de foto de perfil de Dave"
                width="300px" height="300px">
    
        </div>
            <div class="sobre-mi">
                <button type="button" class="btn btn-outline-light" id="boton1">Sobre Mi</button>

                <h4 id="sob-mi">Mi nombre es Dave Hayes, Soy un ingeniero en software, naci el 4 de marzo de 1986,
                    por lo tanto tengo 36 años. Nací en Texas, Estados Unidos.
                </h4>

            </div>

            <div class="educacion">
                <button type="button" class="btn btn-outline-light" id="boton2">Educación</button>
                <ul id="education">
                    <l1>Estudios universitarios completos: Secundaria Texas</l1>
                    <l2>Curso de desarrollo web frontend</l2>
                    <a>Estudios Universitarios de ingenieria en software: Universidad de Texas</a>
                    <a>Maestría en Excel</a>
                </ul>
            </div>
        
        <div class="experiencia-laboral">
            <button type="button" class="btn btn-outline-light" id="boton3">Experiencia Laboral</button>
            <h4 id="exp-lab">Luego de completar mi curso de desarrollo web frontend, inicié a trabajar en una empresa pequeña de
                Linkedn,
                creando paginas web, hice trabajos de este tipo durante unos 4 años. Al pasar los años me recibi como
                Ing. en Software, en el que me contrató una empresa
                que quería crear una app para enfermeros, por lo que me sume y creamos la aplicacion. Al dia de hoy solo
                desarrollo paginas web.
            </h4> 
        </div>

        <div class="contacto">
            <button type="button" class="btn btn-outline-light" id="boton4">Contacto</button>
            <ul id="contact">
                <li>Teléfono: (308) 686-6994</li>
                <li>Email: dave.hayes@example.com</li>
                <li>Dirección: 5204 Valley View Ln</li>

            </ul>

        </div>

    </div>
    <script src="JS/index.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>

</html>
