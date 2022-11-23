import { SiGmail } from 'react-icons/si'
import { AiOutlineInstagram } from 'react-icons/ai'

import { StoryBox } from "./components/StoryBox";
import meWithMyMom from './assets/me-with-my-mom.jpg';

import meAndGuitar from './assets/me-and-guitar.jpeg'

export function App() {
  return (
    <>
      <header className="p-5 bg-zinc-900 text-white flex items-center justify-between" id='init'>
        <h1 className="font-light text-lg ml-2">dan gt.</h1>
        <div className="flex items-center gap-5">
          <a href='#init' className="py-2 px-4 rounded-md hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-300">Início</a>
          <a href='#bio' className="py-2 px-4 rounded-md hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-300">Biografia</a>
          <a href='#contact' className="py-2 px-4 rounded-md hover:text-zinc-100 hover:bg-zinc-700 transition-all duration-300">Contato</a>
        </div>
      </header>
      <section className='bg-[url("assets/guitar.jpeg")] w-[100%] h-[88vh] bg-center bg-no-repeat bg-cover flex justify-center items-center text-white'>
        <h2>"Um menino que através de suas mãos, encanta muitas pessoas."</h2>
      </section>
      <section className="p-8 bg-zinc-900 text-white h-[100%]" id="bio">
        <div>
          <h1 className="font-light text-lg">Biografia</h1>
          <div className="w-[100%] h-[1px] bg-zinc-600 my-2 rounded-md"></div>
          <div className='min-h-full p-12 flex items-center justify-center'>
            <ul className='flex flex-col gap-y-6'>
              <li>
                <StoryBox time='2013-2019'>
                  <p>No período de 2013 até 2019, eu era simplesmente apaixonado pela guitarra, sempre admirava os solos desse instrumento, e sempre parava pra pensar comigo mesmo: <span className='font-semibold'>"será que um dia vou conseguir conhecer um pouco mais desse intrumento?"</span></p>
                </StoryBox>
              </li>
              <li>
                <StoryBox time='2019'>
                  <p>No ano de 2019, surge uma oportunidade para eu aprender esse instrumento que tanto almejava. Eu estava muito animado para aprender, porém, quando começaram as aulas, me entregam um violão, fiquei chateado e com um até co raiva, não vou mentir.</p>
                  <p className="mt-2">Apesar de tudo, me dediquei. Os professores escolheram uma música para aprendermos completa, e colocaram uma menina que já tinha um conhecimento maior do que o meu para tocar guitarra.</p>
                  <p className="mt-2">Eu fiquei chateado, mas "dei a volta por cima", e aprendi o solo que ela iria fazer em menos de uma semana, ou seja, minha história para tocar relativamente bem hoje, foi por causa de uma "inveja", isso é um tanto que engraçado.</p>
                  <p className="mt-2">A partir daí, só fui evoluindo mais e mais e me inspirando em guitarristas com o Slash (Guns n' roses), Juninho Afram (Oficina G3), Mateus Asato (Bruno Mars) entre vários outros que poderia passar o dia inteiro falando sobre.</p>
                </StoryBox>
              </li>
              <li>
                <StoryBox time='2020'>
                  <p>No ano de 2020, eu tive uma aula com um amigo que já é mais experiente no intrumento, nessa aula ele me ensinou a famosa pentatônica (conjunto de todas as escalas formadas por cinco notas musicais ou tons), que é a escala mais usada no instrumento, a qual todos os guitarristas desse mundo conhecem, e o quão esse aula me é útil para mim até hoje, eu não saberia explicar.</p>
                  <img src={meWithMyMom} className='h-80 my-6 rounded-md' />
                  <p>De acordo com minha evolução, meu pai foi dando importância a isso, e em 2020, ele ajudou numa espécie de "arrecadação" para comprar minha primeira guitarra, meus irmãos me ajudaram também, e comprei minha guitarra numa tarde de segunda feira, que é que está na abertura dessa linha do tempo. A partir daí eu comecei a imaginar notas na minha cabeça, e reproduzia no meu instrumento, era como algo sobrenatural.</p>
                </StoryBox>
              </li>
              <li>
                <StoryBox time='2022'>
                  <p>Nos dias atuais, passei por várias correções em minha maneira de tocar, mas creio que foi para cooperar com minha evolução, mas sigo em busca de evoluir mais e mais a cada vez que toco aquelas 6 cordas 🤘</p>
                  <img src={meAndGuitar} className="mt-6 rounded-md w-80" />
                </StoryBox>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-8 bg-zinc-900 text-white h-[100%]" id='contact'>
        <div>
          <h1 className="font-light text-lg">Contato</h1>
          <div className="w-[100%] h-[1px] bg-zinc-600 my-2 rounded-md"></div>
          <div className='min-h-full p-12 grid grid-cols-2 gap-8 items-center'>
            <button className='flex items-center gap-5 shadow-md bg-zinc-800 rounded-md py-4 px-4 hover:shadow-2xl transition-all duration-500'>
              <SiGmail size={35} />
              <span>danielalvespessoa3006@gmail.com</span>
            </button>
            <a href='https://www.instagram.com/i_am__danyy/' className='flex items-center gap-5 shadow-md bg-zinc-800 rounded-md py-4 px-4 hover:shadow-2xl transition-all duration-500 outline-none'>
              <AiOutlineInstagram size={35} />
              <span>@i_am__danyy</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
