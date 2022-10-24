import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";
import renderWithRouter from "./helper/RenderWithRouter";

describe("Testa o site de compras online, página principal", () => {
  test("Se o titulo da página e a logo renderizam", async () => {
    render(<App />);
    const title = screen.getByText("Athena Sports");
    const logo = screen.getByAltText("logo");
    const shoppingCartButtonDetails = await screen.findByRole("heading", { name: /Shopping Cart/i });
    expect(shoppingCartButtonDetails).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
  test("Testa se existem sete categorias de produtos em exibição", async () => {
    render(<App />);
    const navButtons = await screen.findAllByTestId("category");
    expect(navButtons).toHaveLength(7);
  });
  test("Testa se cada categoria possui 50 produtos em exibição", async () => {
    render(<App />);
    const navButtons = await screen.findAllByTestId("category");
    const productContainer = await screen.findAllByTestId("product__container");
    userEvent.click(navButtons[0]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[1]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[2]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[3]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[4]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[5]);
    expect(productContainer).toHaveLength(50);
    userEvent.click(navButtons[6]);
    expect(productContainer).toHaveLength(50);
  });
});

describe("Testa o site de compras online, página principal", () => {
  test("Testa se quando troca de categoria a imagem do esporte também muda", async () => {
    render(<App />);
    const navButtons = await screen.findAllByTestId("category");
    userEvent.click(navButtons[1]);
    const imgHero = await screen.findByAltText("volleyball");
    expect(imgHero).toBeInTheDocument();
  });

  test("Testa se quando clica no botão de 'details', vai para a pagina de detalhes do produto", async () => {
    renderWithRouter(<App />);
    const navButtons = await screen.findAllByTestId("category");
    userEvent.click(navButtons[1]);
    const productContainerButton = await screen.findAllByTestId("product__container_details_button");
    userEvent.click(productContainerButton[1]);
    const title = await screen.findByTestId("title_product");
    expect(title).toBeDefined();
    // Encontrar e clicar no botão de voltar para a página inicial.
    const backToShopping = await screen.findByRole("heading", { name: /Back to Shopping/i });
    userEvent.click(backToShopping);
  });

  test("Testa se quando clica no botão de 'details', vai para a pagina de detalhes do produto", async () => {
    renderWithRouter(<App />);
    const navButtons = await screen.findAllByTestId("category");
    userEvent.click(navButtons[1]);
    const productContainerButton = await screen.findAllByTestId("product__container_details_button");
    userEvent.click(productContainerButton[1]);
    const title = await screen.findByTestId("title_product");
    expect(title).toBeDefined();
    // Encontrar e clicar no botão de voltar para a página inicial.
    const backToShopping = await screen.findByRole("heading", { name: /Back to Shopping/i });
    userEvent.click(backToShopping);
  });
});

describe("Testa o site de compras online, página principal", () => {
  test("Testa a funcionabilidade dos botões", async () => {
    renderWithRouter(<App />);
    // Encontrar e clicar no botão de adicionar ao carrinho de compras
    const productContainerButton = await screen.findAllByTestId("product__container_cart_button");
    userEvent.click(productContainerButton[0]);
    //  Encontrar e clicar no botão de ir ao carrinho de compras
    const shoppingCartButton = await screen.findByRole("button", { name: "Shopping Cart" });
    userEvent.click(shoppingCartButton);
    // Verificar se tem algum item no carrinho de compras
    const productsList = await screen.findByRole("list");
    expect(productsList).toBeDefined();
    // Encontrar e clicar no botão de voltar para a página inicial.
    const backToShopping2 = await screen.findByRole("heading", { name: /Back to Shopping/i });
    userEvent.click(backToShopping2);
    // Encotrar e clicar no botão de Detalhes do produto
    const productContainerButtonDetails = await screen.findAllByTestId("product__container_details_button");
    userEvent.click(productContainerButtonDetails[1]);
    // Encontar e clicar no botão de adicionar ao carrinho de compras
    const addToCart = await screen.findByRole("heading", { name: /add to cart/i });
    userEvent.click(addToCart);
    // Encontar e clicar no botão de ir ao carrinho de compras
    const shoppingCartButtonDetails = await screen.findByRole("heading", { name: /Shopping Cart/i });
    userEvent.click(shoppingCartButtonDetails);
    // Encontar e clicar no botão de adicionar mais um item da lista de produtos
    const quantity = await screen.findAllByTestId("quantity");
    expect(quantity[1]).toHaveTextContent("Quantity: 1");
    const plusItem = await screen.findAllByRole("button", { name: "+" });
    userEvent.click(plusItem[0]);
    // Encontar e clicar no botão de remover mais um item da lista de produtos
    const minusItem = await screen.findAllByRole("button", { name: "-" });
    userEvent.click(minusItem[1]);
    userEvent.click(minusItem[0]);
    userEvent.click(minusItem[0]);
    // Verificar se o carrinho de compras está vazio
    const cartEpty = await screen.findByRole("heading", { name: /cart empty/i });
    expect(cartEpty).toHaveTextContent("Cart Empty");
    const checkOut = await screen.findByRole("heading", { name: /checkout/i });
    userEvent.click(checkOut);
  });
});
