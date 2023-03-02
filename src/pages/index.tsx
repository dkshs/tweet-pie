import { Meta } from "@/components/Meta";

export default function Home() {
  return (
    <>
      <Meta title="Página inicial" path="/" />
      <div>
        <h2>Página inicial</h2>
        <div>
          <button type="button">Para você</button>
          <button type="button">Seguindo</button>
        </div>
      </div>
      <div>
        <img src="favicon.ico" alt="logo" />
        <div>
          <textarea placeholder="O que está acontecendo?"></textarea>
        </div>
        <button type="button">Tweetar</button>
      </div>
      <div>Conteúdo</div>
    </>
  );
}
