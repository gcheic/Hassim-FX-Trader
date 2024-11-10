<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculateur de Gain et de Lot en Forex</title>
    <style>
        /* CSS inclus */
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 350px;
            text-align: center;
        }

        h1 {
            color: #333;
            font-size: 22px;
            margin-bottom: 10px;
        }

        h2 {
            font-size: 18px;
            color: #666;
            margin-top: 0;
            font-weight: normal;
        }

        label {
            display: block;
            margin: 15px 0 5px;
            font-size: 14px;
            color: #555;
            text-align: left;
        }

        input {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 14px;
            color: #333;
        }

        button {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            margin-top: 10px;
        }

        button:hover {
            background-color: #0056b3;
        }

        #results {
            margin-top: 20px;
        }

        #results h3 {
            color: #333;
            font-size: 18px;
            margin-bottom: 10px;
        }

        #results p {
            font-size: 16px;
            color: #666;
            margin: 5px 0;
        }

        .broker-link, .whatsapp-link {
            background-color: #28a745;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
            margin-top: 10px;
            text-decoration: none;
            display: inline-block;
        }

        .broker-link:hover, .whatsapp-link:hover {
            background-color: #218838;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Calculateur de Gain et de Lot en Forex</h1>
        <h2>Hassim TRADER FX</h2>
        <form id="forexCalculator">
            <label for="capital">Capital de départ (en USD) :</label>
            <input type="number" id="capital" placeholder="1000" required>

            <label for="risk">Risque par trade (%) :</label>
            <input type="number" id="risk" placeholder="2" required>

            <label for="pips">Nombre de pips visés :</label>
            <input type="number" id="pips" placeholder="50" required>

            <label for="pipValue">Valeur d'un pip (en USD) :</label>
            <input type="number" id="pipValue" placeholder="0.1" required>

            <button type="button" onclick="calculate()">Calculer</button>
        </form>

        <div id="results">
            <h3>Résultats :</h3>
            <p>Taille du lot recommandée : <span id="lotSize">-</span></p>
            <p>Gain potentiel en pourcentage : <span id="profitPercentage">-</span>%</p>
        </div>

        <!-- Bouton d'inscription pour le broker -->
        <a href="https://one.exnesstrack.org/a/sfpfysgpc9" target="_blank" class="broker-link">
            S'inscrire avec le meilleur broker du monde
        </a>

        <!-- Bouton pour contacter sur WhatsApp -->
        <a href="https://wa.me/22657202363" target="_blank" class="whatsapp-link">
            Obtenez une formation complète sur le trading Forex
        </a>
    </div>

    <script>
        // Fonction de calcul
        function calculate() {
            // Récupérer les valeurs entrées par l'utilisateur
            const capital = parseFloat(document.getElementById('capital').value);
            const riskPercentage = parseFloat(document.getElementById('risk').value);
            const pips = parseFloat(document.getElementById('pips').value);
            const pipValue = parseFloat(document.getElementById('pipValue').value);

            // Vérification des valeurs
            if (isNaN(capital) || isNaN(riskPercentage) || isNaN(pips) || isNaN(pipValue)) {
                alert("Veuillez entrer des valeurs valides.");
                return;
            }

            // Calcul du risque en dollars
            const riskAmount = (capital * riskPercentage) / 100;

            // Calcul de la taille du lot
            const lotSize = riskAmount / (pips * pipValue);

            // Calcul du gain potentiel en pourcentage
            const profitPercentage = (pips * pipValue * lotSize) / capital * 100;

            // Affichage des résultats
            document.getElementById('lotSize').textContent = lotSize.toFixed(2);
            document.getElementById('profitPercentage').textContent = profitPercentage.toFixed(2);
        }
    </script>
</body>
</html>