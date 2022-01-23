console.log("Script.js ne hi bola hai.");

let addToCartButtons = document.getElementsByClassName("buy_button");

for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", () => {
    console.log(
      "ID of the product added: " + addToCartButtons[i].dataset.product_id
    );
    let productData = {
      product_id: addToCartButtons[i].dataset.product_id,
    };
    console.log(JSON.stringify(productData));
    const endPoint = "http://127.0.0.1:8000/sendChosenProduct";
    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message: ", data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  });
}
