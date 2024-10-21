const url = "https://ms-finance.p.rapidapi.com/market/v2/get-movers";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "280f5ef259mshfb74729579a274cp1a1ab8jsn764d7c84c1c7",
    "X-RapidAPI-Host": "ms-finance.p.rapidapi.com",
  },
};

// Function to generate card HTML with dynamic symbol
function generateCard(stock, sectionId) {
  console.log(stock);
  const containerId = `tradingview-widget-container-${stock}-${sectionId}`;
  const cardHTML = `
      <div class="tradingview-widget-container" id="${containerId}"></div>
  `;
  return cardHTML;
}

// Function to display cards for each section
async function displayCards(sectionId, stocks) {
  const sectionElement = document.getElementById(sectionId);
  if (!sectionElement) return;

  stocks.forEach((stock) => {
    const cardElement = document.createElement("div");
    cardElement.className = "__card";
    cardElement.innerHTML = generateCard(stock.ticker, sectionId);

    sectionElement.appendChild(cardElement);
  });

  await loadTradingViewWidgets(stocks, sectionId);
}

// Function to load TradingView widgets
async function loadTradingViewWidgets(stocks, sectionId) {
  await Promise.all(
    stocks.map(async (stock) => {
      const containerId = `tradingview-widget-container-${stock.ticker}-${sectionId}`;
      const containerElement = document.getElementById(containerId);
      if (!containerElement) return;

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      script.innerHTML = `
      {
        "symbol": "${stock.ticker}",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "12M",
        "colorTheme": "dark",
        "isTransparent": false,
        "autosize": true,
        "largeChartUrl": "https://trading-platform2.onrender.com/stock_detailed_view"
      }
    `;

      containerElement.appendChild(script);
    })
  );
}

// API call to retrieve stock data
async function fetchStockData() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const topGainers = data.gainers.slice(0, 6);
    const topLosers = data.losers.slice(0, 6);
    const topActives = data.actives.slice(0, 6);

    await displayCards("gainersContainer", topGainers);
    await displayCards("losersContainer", topLosers);
    await displayCards("activesContainer", topActives);
  } catch (error) {
    console.error(error);
    // Handle errors here
  }
}

fetchStockData();
