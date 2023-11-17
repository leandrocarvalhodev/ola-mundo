import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrão from "componentes/PaginaPadrao";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrão />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />

        </Route>

        {/* 
        
         Na rota "/", a estrutura a ser renderizada é:
         
         <PaginaPadrao>
            <Inicio >
         </PaginaPadrao>


         Na rota "/sobremim", a estrutura a ser renderizada é:
         
         <PaginaPadrao>
            <SobrMim >
         </PaginaPadrao>

        */}
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  )
}

export default AppRoutes;
