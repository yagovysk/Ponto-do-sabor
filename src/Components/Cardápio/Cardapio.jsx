import "../../App.css";

export function Cardapio() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center px-4 py-15">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl lobster-css text-center mb-4">
          Pizzas Salgadas Grandes
        </h2>
        <article className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">Pizza de Muçarela</h3>
              <p className="lobster-two-css">
                Massa, queijo, molho de tomate, azeitonas e orégano.
              </p>
              <p className="lobster-two-css">R$ 30,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza Marguerita</h3>
              <p className="lobster-two-css">
                Massa, queijo, molho de tomate, tomate, manjericão e orégano.
              </p>
              <p className="lobster-two-css">R$ 30,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Presunto</h3>
              <p className="lobster-two-css">
                Massa, queijo, presunto, molho de tomate, tomate, cebola e
                orégano.
              </p>
              <p className="lobster-two-css">R$ 30,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Lombo</h3>
              <p className="lobster-two-css">
                Massa, queijo, lombo canadense, molho de tomate, tomate, cebola
                e orégano.
              </p>
              <p className="lobster-two-css">R$ 35,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">
                Pizza de Frango com catupiry
              </h3>
              <p className="lobster-two-css">
                Massa, queijo, frango, molho de tomate, milho, azeitonas,
                catupiry e orégano.
              </p>
              <p>R$ 37,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Bacon</h3>
              <p className="lobster-two-css">
                Massa, queijo, bacon, molho de tomate, tomate, cebola, azeitonas
                e orégano.
              </p>
              <p className="lobster-two-css">R$ 37,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Peperoni</h3>
              <p className="lobster-two-css">
                Massa, queijo, peperoni, molho de tomate, tomate, azeitonas,
                manjericão e orégano.
              </p>
              <p className="lobster-two-css">R$ 37,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza Moda da casa</h3>
              <p className="lobster-two-css">
                Massa, queijo, presunto, frango, milho, pimentão, molho de
                tomate, tomate, cebola e orégano
              </p>
              <p className="lobster-two-css">R$ 37,99</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">Pizza de Frango</h3>
              <p className="lobster-two-css">
                Massa, queijo, frango, molho de tomate, milho, azeitonas e
                orégano.
              </p>
              <p className="lobster-two-css">R$ 35,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Calabresa</h3>
              <p className="lobster-two-css">
                Massa, queijo, molho de tomate, calabresa, cebola, azeitonas e
                orégano.
              </p>
              <p className="lobster-two-css">R$ 30,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Peito de Peru</h3>
              <p className="lobster-two-css">
                Massa, queijo, molho de tomate, peito de peru, tomate, cebola e
                orégano.
              </p>
              <p className="lobster-two-css">R$ 35,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Frango</h3>
              <p className="lobster-two-css">
                Massa, queijo, frango, molho de tomate, milho, azeitonas e
                orégano.
              </p>
              <p className="lobster-two-css">R$ 35,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Frango com bacon</h3>
              <p className="lobster-two-css">
                Massa, queijo, frango, bacon, molho de tomate, azeitonas e
                orégano
              </p>
              <p className="lobster-two-css">R$ 37,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de 4 queijos</h3>
              <p className="lobster-two-css">
                Massa, queijo muçarela, parmesão, gorgonzola, catupiry, molho de
                tomate e orégano.
              </p>
              <p className="lobster-two-css">R$ 37,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza Portuguesa</h3>
              <p className="lobster-two-css">
                Massa, queijo, presunto, calabresa, tomate, molho de tomate,
                milho, cebola, ovo, azeitonas e orégano.
              </p>
              <p className="lobster-two-css">R$ 37,99</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza Carne Seca</h3>
              <p className="lobster-two-css">
                Massa, queijo, carne seca, molho de tomate, tomate, cebola,
                azeitona e orégano.
              </p>
              <p className="lobster-two-css">R$ 37,99</p>
            </div>
          </div>
        </article>

        <h2 className="text-2xl font-bold text-center my-4">Pizzas Doces</h2>
        <article className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">Pizza de Banana</h3>
              <p className="lobster-two-css">
                Massa, queijo, banana, açúcar refinado polvilhado.
              </p>
              <p className="lobster-two-css">R$ 32,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Chocolate</h3>
              <p className="lobster-two-css">
                Massa, queijo, chocolate ao leite, granulado e leite condensado.
              </p>
              <p className="lobster-two-css">R$ 34,99</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de Beijinho</h3>
              <p className="lobster-two-css">
                Massa, queijo, coco ralado, creme de leite e leite condensado.
              </p>
              <p className="lobster-two-css">R$ 34,99</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">Pizza de Banana e canela</h3>
              <p className="lobster-two-css">
                Massa, queijo , banana, leite condensado e canela.
              </p>
              <p className="lobster-two-css">R$ 34,99</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Pizza de morango </h3>
              <p className="lobster-two-css">
                Massa, queijo, chocolate, morango e leite condensado.
              </p>
              <p className="lobster-two-css">R$ 35,99</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css"> Romeu e Julieta</h3>
              <p className="lobster-two-css">
                Massa, queijo, goiabada, creme de leite e queijo qualho.
              </p>
              <p className="lobster-two-css">R$ 35,99</p>
            </div>
          </div>
        </article>
        <article className="grid grid-cols-2 grid-rows-2 gap-2 text-center">
          <p className="lobster-two-css">Qualquer adicional R$ 5,00</p>
          <p className="lobster-two-css">Borda de Chocolate R$ 5,00</p>
          <p className="lobster-two-css">Borda de Catupiry R$ 5,00</p>
          <p className="lobster-two-css">Borda de Cheddar R$ 5,00</p>
        </article>

        <h2 className="text-2xl lobster-css text-center my-4">Hambúrgueres</h2>
        <article className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">X-Burguer</h3>
              <p className="lobster-two-css">
                Pão Brioche, hambúrguer, queijo, presunto, tomate e alface.
              </p>
              <p className="lobster-two-css">R$ 10,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">X-Tudo Especial da Casa</h3>
              <p className="lobster-two-css">
                Pão Brioche, filé de frango, hambúrguer, queijo, presunto, ovo,
                milho, tomate, alface e batata palha.
              </p>
              <p>R$ 15,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">X-Burguer Frango Especial</h3>
              <p className="lobster-two-css">
                Pão Brioche, filé de frango, hambúrguer, queijo, ovo, milho,
                tomate, alface e batata palha.
              </p>
              <p>R$ 16,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">X-Burguer Bacon Especial</h3>
              <p className="lobster-two-css">
                Pão Brioche, bacon, hambúrguer, presunto, queijo, ovo, milho,
                cebola, tomate, alface e batata palha.
              </p>
              <p className="lobster-two-css">R$ 16,00</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div>
              <h3 className="text-lg lobster-css">X-Burgão</h3>
              <p className="lobster-two-css">
                Pão Brioche, hambúrguer, presunto, queijo, vinagrete, alface e
                batata palha.
              </p>
              <p className="lobster-two-css">R$ 13,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">X-Burguer Frango</h3>
              <p className="lobster-two-css">
                Pão Brioche, filé de frango, queijo, tomate e alface.
              </p>
              <p className="lobster-two-css">R$ 12,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">X-Burguer Bacon</h3>
              <p className="lobster-two-css">
                Pão Brioche, Hambúrguer, presunto, queijo, tomate, alface e
                cebola.
              </p>
              <p className="lobster-two-css">R$ 13,00</p>
            </div>
            <div>
              <h3 className="text-lg lobster-css">Cachorro Quente</h3>
              <p className="lobster-two-css">
                Pão, salsicha ao molho, queijo, milho, alface e tomate.
              </p>
              <p className="lobster-two-css">R$ 9,99</p>
            </div>
          </div>
        </article>
      </div>
      <article>
        <h3 className="lobster-css">Dog Especial</h3>
        <p className="lobster-two-css">
          Pão, salsicha na chapa, queijo, milho, alface, tomate e batata palha.
        </p>
        <p className="lobster-two-css">R$ 11,99</p>
      </article>
    </section>
  );
}
