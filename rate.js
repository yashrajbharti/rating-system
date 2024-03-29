
  // Initial Ratings
  const ratings = {
    icecream: 4.7,
    pizza: 3.4,
    burger: 2.3,
    chicken: 3.6,
    coffee: 4.1
  }
  // Total stars
  const starsTotal = 5;

  // run getRatings when DOM loads
  document.addEventListener('DOMContentLoaded', getRatings);

  //form elements
  const productSelect = document.getElementById("product-select");
  const ratingControl = document.getElementById("rating-control");


  // Init product
  let product;

  // product select change
  productSelect.addEventListener('change', (e)=>{
    product = e.target.value;
    //Enable rating control
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
  });

  //rating control change
  ratingControl.addEventListener('blur', (e) => {
    const rating = e.target.value;

    // make sure 5 or under
    if(rating > 5){
      alert('Please rate 1 - 5');
      return;
    }

    // change rating
    ratings[product] = rating;
    getRatings();
  });
  // get Ratings
  function getRatings() {
    for(let rating in ratings){
      //get percentage
      const starPercentage = (ratings[rating] / starsTotal) * 100;
      // round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;
      //set width of stars inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

      // add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
  }
