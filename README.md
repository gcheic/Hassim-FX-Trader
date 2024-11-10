<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestion des Positions Forex Avancée - Hassim Traider Forex</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;m
      align-items: center;
      min-height: 100vh;
      background-color: #f4f4f9;
      margin: 0;
    }
    .container {
      width: 400px;
      padding: 20px;
      background: #ffffff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      text-align: center;
    }
    h1 {
      font-size: 24px;
      color: #333;
      margin-bottom: 10px;
    }
    h2 {
      font-size: 18px;
      color: #666;
      margin-bottom: 20px;
    }
    label {
      font-size: 14px;
      color: #555;
    }
    select, input[type="number"] {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      padding: 10px;
      width: 100%;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 16px;
    }
    button:hover {
      background-color: #45a049;
    }
    .icon-button {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: #fff;
      padding: 10px;
      margin-top: 15px;
      border-radius: 5px;
    }
    .whatsapp {
      background-color: #25D366;
    }
    .broker {
      background-color: #0073e6;
    }
    .icon {
      margin-right: 8px;
    }
    #resultat {
      margin-top: 20px;
      font-size: 16px;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Gestion des Positions Forex</h1>
    <h2>Par Hassim Traider Forex</h2>
    <form id="forexForm">
      <label for="currencyPair">Sélectionnez la paire de devises :</label>
      <select id="currencyPair">
        <option value="EUR/USD">EUR/USD</option>
        <option value="USD/JPY">USD/JPY</option>
        <option value="GBP/USD">GBP/USD</option>
        <option value="USD/CHF">USD/CHF</option>
        <option value="AUD/USD">AUD/USD</option>
        <option value="USD/CAD">USD/CAD</option>
        <option value="NZD/USD">NZD/USD</option>
        <option value="XAU/USD">Or (XAU/USD)</option>
      </select>

      <label for="capital">Capital ($):</label>
      <input type="number" id="capital" placeholder="Entrer votre capital" required>

      <label for="lots">Lots:</label>
      <input type="number" id="lots" placeholder="Entrer le nombre de lots" required>

      <label for="risk">Risque (%) :</label>
      <input type="number" id="risk" placeholder="Entrer le pourcentage de risque" required>

      <button type="button" onclick="calculerRisque()">Calculer le Risque</button>
    </form>

    <p id="resultat"></p>

    <!-- Bouton vers WhatsApp avec texte pour la formation -->
    <a href="https://wa.me/22657202363" target="_blank" class="icon-button whatsapp">
      <span class="icon">📞</span> Contactez-nous pour une formation sur le Forex
    </a>

    <!-- Bouton vers le broker -->
    <a id="brokerLink" href="https://one.exnesstrack.org/a/sfpfysgpc9" target="_blank" class="icon-button broker">
      <span class="icon">🌐</span> Cliquez sur le meilleur broker du monde
    </a>
  </div>

  <script>
    function calculerRisque() {
      // Récupération des valeurs
      const capital = parseFloat(document.getElementById("capital").value);
      const lots = parseFloat(document.getElementById("lots").value);
      const riskPercent = parseFloat(document.getElementById("risk").value);
      const currencyPair = document.getElementById("currencyPair").value;

      // Validation des champs
      if (isNaN(capital) || isNaN(lots) || isNaN(riskPercent)) {
        alert("Veuillez remplir tous les champs !");
        return;
      }

      // Calcul du risque total
      const riskAmount = (capital * riskPercent) / 100;
      const riskPerLot = riskAmount / lots;

      // Afficher les informations de la devise
      let infoDevise = "";
      if (currencyPair === "XAU/USD") {
        infoDevise = "Calcul basé sur le lot standard pour l'or.";
      } else {
        infoDevise = `Calcul basé sur la paire ${currencyPair}.`;
      }

      // Affichage du résultat
      document.getElementById("resultat").innerHTML = `
        <strong>Risque Calculé :</strong><br>
        Paire sélectionnée : ${currencyPair}<br>
        ${infoDevise}<br>
        Risque total : $${riskAmount.toFixed(2)}<br>
        Risque par lot : $${riskPerLot.toFixed(2)}
      `;
    }

    // Vérification du lien du broker pour s'assurer qu'il est cliquable
    document.getElementById("brokerLink").addEventListener("click", function(event) {
      const confirmed = confirm("Vous allez être redirigé vers le site du broker. Voulez-vous continuer ?");
      if (!confirmed) {
        event.preventDefault();
      }
    });
  </script>
</body>
</html>
