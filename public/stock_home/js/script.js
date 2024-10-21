// const symboldata = {
//   "ATVI": "https://api.twelvedata.com/logo/adobe.com",
//   "ADBE": "https://api.twelvedata.com/logo/adobe.com",
//   "AMD": "https://api.twelvedata.com/logo/amd.com",
//   "SMMT": "https://api.twelvedata.com/logo/smmt.com",
//   "NYCB": "https://api.twelvedata.com/logo/flagstar.com",
//   "CVS": "https://api.twelvedata.com/logo/cvshealth.com",
//   "POWL": "https://api.twelvedata.com/logo/powellind.com",
//   "MDXG": "https://api.twelvedata.com/logo/mimedx.com",
//   "PINS": "https://api.twelvedata.com/logo/pinterest.com",
//   "ALGN": "https://api.twelvedata.com/logo/aligntech.com",
//   "GOOGL": "https://api.twelvedata.com/logo/abc.xyz",
//   "GOOG": "https://api.twelvedata.com/logo/abc.xyz",
//   "AMZN": "https://api.twelvedata.com/logo/aboutamazon.com",
//   "AAL": "https://api.twelvedata.com/logo/americanairlines.in",
//   "AMGN": "https://api.twelvedata.com/logo/amgen.com",
//   "ADI": "https://api.twelvedata.com/logo/analog.com",
//   "AAPL": "https://api.twelvedata.com/logo/apple.com",
//   "AMAT": "https://api.twelvedata.com/logo/appliedmaterials.com",
//   "ASML": "https://api.twelvedata.com/logo/asml.com",
//   "TEAM": "https://api.twelvedata.com/logo/atlassian.com",
//   "ADSK": "https://api.twelvedata.com/logo/autodesk.com",
//   "ADP": "https://api.twelvedata.com/logo/adp.com",
//   "BIDU": "https://api.twelvedata.com/logo/ir.baidu.com",
//   "BIIB": "https://api.twelvedata.com/logo/biogen.com",
//   "BMRN": "https://api.twelvedata.com/logo/biomarin.com",
//   "BKNG": "https://example.com/bkng_logo.png",
//   "AVGO": "https://example.com/avgo_logo.png",
//   "CDNS": "https://example.com/cdns_logo.png",
//   "CDW": "https://api.twelvedata.com/logo/cdw.com",
//   "CHTR": "https://api.twelvedata.com/logo/corporate.charter.com",
//   "CHKP": "https://api.twelvedata.com/logo/checkpoint.com",
//   "CTAS": "https://api.twelvedata.com/logo/cintas.com",
//   "CSCO": "https://api.twelvedata.com/logo/cisco.com",
//   "CTXS": "https://api.twelvedata.com/logo/exeloncorp.com",
//   "CTSH": "https://api.twelvedata.com/logo/cognizant.com",
//   "CMCSA": "https://api.twelvedata.com/logo/corporate.comcast.com",
//   "CPRT": "https://api.twelvedata.com/logo/copart.com",
//   "COST": "https://api.twelvedata.com/logo/costco.com",
//   "CSX": "https://api.twelvedata.com/logo/csx.com",
//   "XRAY": "https://api.twelvedata.com/logo/dentsplysirona.com",
//   "DOCU": "https://api.twelvedata.com/logo/DocuSign.com",
//   "DLTR": "https://api.twelvedata.com/logo/dollartree.com",
//   "EBAY": "https://api.twelvedata.com/logo/ebayinc.com",
//   "EA": "https://api.twelvedata.com/logo/ea.com",
//   "EXC": "https://api.twelvedata.com/logo/exeloncorp.com",
//   "EXPE": "https://api.twelvedata.com/logo/expediagroup.com",
//   "FAST": "https://api.twelvedata.com/logo/fastenal.com",
//   "FI": "https://api.twelvedata.com/logo/fiserv.com",
//   "FOXA": "https://api.twelvedata.com/logo/foxcorporation.com",
//   "FOX": "https://api.twelvedata.com/logo/foxcorporation.com",
//   "GILD": "https://api.twelvedata.com/logo/gilead.com",
//   "IDXX": "https://api.twelvedata.com/logo/idexx.com",
//   "INCY": "https://api.twelvedata.com/logo/incyte.com",
//   "INTC": "https://api.twelvedata.com/logo/intel.com",
//   "INTU": "https://api.twelvedata.com/logo/intuit.com",
//   "ISRG": "https://api.twelvedata.com/logo/intuitive.com",
//   "JD": "https://api.twelvedata.com/logo/jd.com",
//   "KLAC": "https://api.twelvedata.com/logo/kla.com",
//   "KHC": "https://api.twelvedata.com/logo/kraftheinzcompany.com",
//   "LRCX": "https://api.twelvedata.com/logo/lamresearch.com",
//   "LBTYA": "https://api.twelvedata.com/logo/libertyglobal.com",
//   "LBTYK": "https://api.twelvedata.com/logo/libertyglobal.com",
//   "LSXMA": "https://api.twelvedata.com/logo/libertymedia.com",
//   "LIN": "https://api.twelvedata.com/logo/linde.com",
//   "LOGI": "https://api.twelvedata.com/logo/logitech.com",
//   "MAR": "https://api.twelvedata.com/logo/marriott.com",
//   "MTCH": "https://api.twelvedata.com/logo/mtch.com",
//   "MXIM": "https://api.twelvedata.com/logo/maximintegrated.com",
//   "MELI": "https://api.twelvedata.com/logo/mercadolibre.com",
//   "MU": "https://api.twelvedata.com/logo/micron.com",
//   "MSFT": "https://api.twelvedata.com/logo/microsoft.com",
//   "MRNA": "https://api.twelvedata.com/logo/modernatx.com",
//   "MDLZ": "https://api.twelvedata.com/logo/mondelezinternational.com",
//   "MNST": "https://api.twelvedata.com/logo/monsterbevcorp.com",
//   "NTES": "https://api.twelvedata.com/logo/netease.gcs-web.com",
//   "NFLX": "https://api.twelvedata.com/logo/netflix.com",
//   "NVDA": "https://api.twelvedata.com/logo/nvidia.com",
//   "NXPI": "https://api.twelvedata.com/logo/nxp.com",
//   "ORLY": "https://api.twelvedata.com/logo/oreillyauto.com",
//   "PCAR": "https://api.twelvedata.com/logo/paccar.com",
//   "PAYX": "https://api.twelvedata.com/logo/paychex.com",
//   "PYPL": "https://api.twelvedata.com/logo/paypal.com",
//   "PTON": "https://api.twelvedata.com/logo/onepeloton.com",
//   "PEP": "https://api.twelvedata.com/logo/pepsico.com",
//   "PDD": "https://api.twelvedata.com/logo/pddholdings.com",
//   "PLD": "https://api.twelvedata.com/logo/prologis.com",
//   "QCOM": "https://api.twelvedata.com/logo/qualcomm.com",
//   "REGN": "https://api.twelvedata.com/logo/regeneron.com",
//   "ROST": "https://api.twelvedata.com/logo/rossstores.com",
//   "CRM": "https://api.twelvedata.com/logo/salesforce.com",
//   "SE": "https://api.twelvedata.com/logo/sea.com",
//   "SWKS": "https://api.twelvedata.com/logo/skyworksinc.com",
//   "SBUX": "https://api.twelvedata.com/logo/starbucks.com",
//   "SNPS": "https://api.twelvedata.com/logo/synopsys.com",
//   "TMUS": "https://api.twelvedata.com/logo/t-mobile.com",
//   "TTWO": "https://api.twelvedata.com/logo/take2games.com",
//   "TSLA": "https://api.twelvedata.com/logo/tesla.com",
//   "TXN": "https://api.twelvedata.com/logo/ti.com",
//   "TTD": "https://api.twelvedata.com/logo/thetradedesk.com",
//   "TCOM": "https://api.twelvedata.com/logo/group.trip.com",
//   "ULTA": "https://api.twelvedata.com/logo/ulta.com",
//   "VRSN": "https://api.twelvedata.com/logo/verisign.com",
//   "VRTX": "https://api.twelvedata.com/logo/vrtx.com",
//   "WBA": "https://api.twelvedata.com/logo/walgreensbootsalliance.com",
//   "WDC": "https://api.twelvedata.com/logo/westerndigital.com",
//   "WDAY": "https://api.twelvedata.com/logo/workday.com",
//   "XEL": "https://api.twelvedata.com/logo/xcelenergy.com",
//   "XLNX": "https://api.twelvedata.com/logo/xilinx.com",
//   "ZM": "https://api.twelvedata.com/logo/zoom.us",
//   "NIO"    : "https://api.twelvedata.com/logo/nio.com",
//   "LC"    : "https://api.twelvedata.com/logo/lendingclub.com",
//   "TMDX"   :  "https://api.twelvedata.com/logo/transmedics.com",
//   "TLRY"   :  "https://api.twelvedata.com/logo/tilray.com",
//   "FBC"   :  "https://api.twelvedata.com/logo/flagstar.com",
//   "OI"   :  "https://api.twelvedata.com/logo/o-i.com",
//  "CGC"  :  "https://api.twelvedata.com/logo/canopygrowth.com",
//   "LEG"   :  "https://api.twelvedata.com/logo/leggett.com"
// }
// const url = 'https://ms-finance.p.rapidapi.com/market/v2/get-movers';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '280f5ef259mshfb74729579a274cp1a1ab8jsn764d7c84c1c7',
// 		'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
// 	}
// };


// function generateCard(stock) {
//     const trimmedName = stock.name.substring(0, 20);
//     const symbol = stock.ticker;
//     const url = symboldata[symbol];
//     return `
//       <div class="bg-zinc-800 p-6 max-w-sm rounded-lg">
//         <div class="flex items-center space-x-3 mb-4">
//         <div className="image">
//         <img src=${url} alt="Logo" class="w-12 h-12" />
//         </div>
//           <span class="text-white font-semibold text-lg" id="name">${trimmedName}</span>
//         </div>
//         <div class="text-white" id="lower">
//           <p class="text-2xl" style="color: white;"> Price : $${stock.lastPrice}</p>
//           <p class="${stock.netChange < 0 ? 'text-red-500' : 'text-green-500'}">change : $${stock.netChange}</p>
//         </div>
//       </div>
//     `;
//   }

//   // Function to display cards for each section
//   function displayCards(sectionId, stocks) {
//     const sectionElement = document.getElementById(sectionId);
//     if (!sectionElement) return;

//     const cardsHTML = stocks.map(stock => generateCard(stock)).join('');
//     sectionElement.innerHTML += cardsHTML;
//   }

//   // API call to retrieve stock data
//   async function fetchStockData() {
//         try {
//             const response = await fetch(url, options);
//             const data = await response.json();
//             // console.log(data);
//             const topGainers = data.gainers.slice(0, 6); // Assuming top 5 gainers
//             const topLosers = data.losers.slice(0, 6); // Assuming top 5 losers
//             const topActives = data.actives.slice(0, 6); // Assuming top 5 actives
      
//             // Display cards for each section
//             displayCards('gainersContainer', topGainers);
//             displayCards('losersContainer', topLosers);
//             displayCards('activesContainer', topActives);
//           } catch (error) {
//             console.log(error);
//             res.status(500).json({ error: 'Internal Server Error' });
//           }
//   }

//   // Call the function to fetch stock data
//   fetchStockData();



