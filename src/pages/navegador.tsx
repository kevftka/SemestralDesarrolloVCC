import React from 'react'


export default class navegador extends React.Component<{}>{
render() {
    return(<>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="/src/view/cargar_video.php" >CC GENERATOR</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./videoList.php">Lista de Videos</a>
                    </li>
                <li class="nav-item active">
                    <a class="nav-link" href="/src/view/login.html"
                    >Login <span class="sr-only">(current)</span></a
                    >
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/src/view/signup.html">Sing up</a>
                </li>
                </ul>
            </div>
        </nav>
    </>)
    }
}


