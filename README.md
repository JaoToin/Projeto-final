<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Via Flux | Entregas na Velocidade da Luz</title>
    <style>
        /* Configurações Globais */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            scroll-behavior: smooth;
        }

        :root {
            --primary-blue: #003366; /* Azul corporativo forte (estilo Correios/Logística) */
            --highlight-yellow: #FFC107; /* Amarelo de destaque e ação rápida */
            --light-bg: #F4F7FA;
            --white: #FFFFFF;
            --text-dark: #333333;
            --text-gray: #666666;
            --border-color: #E0E6ED;
        }

        body {
            background-color: var(--light-bg);
            color: var(--text-dark);
            line-height: 1.6;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Topbar utilitária (Área do Cliente) */
        .topbar {
            background-color: #f1f5f9;
            padding: 0.5rem 2rem;
            display: flex;
            justify-content: flex-end;
            font-size: 0.85rem;
            color: var(--text-gray);
            border-bottom: 1px solid var(--border-color);
        }

        .topbar a {
            margin-left: 1.5rem;
            font-weight: 600;
            transition: color 0.3s;
        }

        .topbar a:hover {
            color: var(--primary-blue);
        }

        /* Cabeçalho Principal */
        header {
            background-color: var(--white);
            box-shadow: 0 4px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
        }

        .logo {
            font-size: 2rem;
            font-weight: 900;
            color: var(--primary-blue);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo span {
            color: var(--highlight-yellow);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
            align-items: center;
        }

        .nav-links a {
            font-weight: 600;
            color: var(--primary-blue);
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: var(--highlight-yellow);
        }

        .btn-entrar {
            background-color: var(--primary-blue);
            color: var(--white) !important;
            padding: 0.5rem 1.5rem;
            border-radius: 4px;
            transition: background 0.3s;
        }

        .btn-entrar:hover {
            background-color: #002244;
        }

        /* Hero Section com Rastreamento (O Coração do Site) */
        .hero {
            background: linear-gradient(135deg, var(--primary-blue) 0%, #00509E 100%);
            padding: 5rem 2rem 8rem 2rem;
            color: var(--white);
            text-align: center;
            position: relative;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 800;
        }

        .hero p {
            font-size: 1.2rem;
            margin-bottom: 3rem;
            color: #D1E4F9;
        }

        /* Caixa de Rastreamento */
        .tracking-box {
            background-color: var(--white);
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 15px 30px rgba(0,0,0,0.15);
            transform: translateY(40%);
            position: relative;
            z-index: 10;
        }

        .tracking-box h2 {
            color: var(--primary-blue);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }

        .search-group {
            display: flex;
            gap: 1rem;
        }

        .search-group input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 1.1rem;
            outline: none;
            transition: border-color 0.3s;
            text-transform: uppercase;
        }

        .search-group input:focus {
            border-color: var(--primary-blue);
        }

        .btn-rastrear {
            background-color: var(--highlight-yellow);
            color: var(--text-dark);
            border: none;
            padding: 0 2rem;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.2s, background 0.3s;
        }

        .btn-rastrear:hover {
            background-color: #e5ad06;
            transform: translateY(-2px);
        }

        /* Acesso Rápido (Serviços principais) */
        .quick-access {
            max-width: 1200px;
            margin: 6rem auto 4rem auto;
            padding: 0 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .card-quick {
            background-color: var(--white);
            padding: 2rem 1.5rem;
            border-radius: 8px;
            text-align: center;
            border: 1px solid var(--border-color);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .card-quick:hover {
            border-color: var(--primary-blue);
            box-shadow: 0 10px 20px rgba(0,51,102,0.08);
            transform: translateY(-5px);
        }

        .card-quick .icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            display: block;
        }

        .card-quick h3 {
            font-size: 1.2rem;
            color: var(--primary-blue);
            margin-bottom: 0.5rem;
        }

        .card-quick p {
            font-size: 0.95rem;
            color: var(--text-gray);
        }

        /* Seção Sobre / Soluções */
        .solutions {
            background-color: var(--white);
            padding: 5rem 2rem;
            border-top: 1px solid var(--border-color);
            border-bottom: 1px solid var(--border-color);
        }

        .container-solutions {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 4rem;
        }

        .solutions-text {
            flex: 1;
        }

        .solutions-text h2 {
            font-size: 2.5rem;
            color: var(--primary-blue);
            margin-bottom: 1.5rem;
        }

        .solutions-text p {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 2rem;
        }

        .solutions-text ul {
            list-style: none;
            margin-bottom: 2rem;
        }

        .solutions-text li {
            margin-bottom: 1rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .solutions-text li::before {
            content: '✓';
            color: var(--highlight-yellow);
            font-weight: bold;
            font-size: 1.2rem;
        }

        .btn-outline {
            display: inline-block;
            border: 2px solid var(--primary-blue);
            color: var(--primary-blue);
            padding: 0.8rem 2rem;
            font-weight: bold;
            border-radius: 4px;
            transition: all 0.3s;
        }

        .btn-outline:hover {
            background-color: var(--primary-blue);
            color: var(--white);
        }

        .solutions-image {
            flex: 1;
            background: url('https://images.unsplash.com/photo-1580674684081-77698a72a15c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80') center/cover;
            height: 400px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* Rodapé Estilo Correios (Robusto) */
        footer {
            background-color: #002244;
            color: var(--white);
            padding: 4rem 2rem 2rem 2rem;
        }

        .footer-grid {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .footer-col h4 {
            color: var(--highlight-yellow);
            margin-bottom: 1.5rem;
            font-size: 1.2rem;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 0.8rem;
        }

        .footer-col ul li a {
            color: #D1E4F9;
            transition: color 0.3s;
        }

        .footer-col ul li a:hover {
            color: var(--highlight-yellow);
            text-decoration: underline;
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 0 auto;
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.1);
            font-size: 0.9rem;
            color: #8fa6c2;
        }

        /* Responsividade */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            .hero h1 {
                font-size: 2.2rem;
            }
            .search-group {
                flex-direction: column;
            }
            .btn-rastrear {
                padding: 1rem;
            }
            .container-solutions {
                flex-direction: column;
            }
            .tracking-box {
                transform: translateY(20%);
                padding: 1.5rem;
            }
            .quick-access {
                margin-top: 3rem;
            }
        }
    </style>
</head>
<body>

    <!-- Topbar Utilitária -->
    <div class="topbar">
        <a href="#">Para Empresas</a>
        <a href="#">Portal do Franqueado</a>
        <a href="#">Fale Conosco</a>
    </div>

    <!-- Cabeçalho Principal -->
    <header>
        <div class="nav-container">
            <a href="#" class="logo">VIA<span>FLUX</span></a>
            <ul class="nav-links">
                <li><a href="#">Rastreamento</a></li>
                <li><a href="#">Preços e Prazos</a></li>
                <li><a href="#">Agências</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#" class="btn-entrar">Meu Perfil</a></li>
            </ul>
        </div>
    </header>

    <!-- Banner e Rastreamento -->
    <section class="hero">
        <h1>Entregas na Velocidade da Luz</h1>
        <p>A rede de logística mais rápida e inteligente do Brasil.</p>
        
        <div class="tracking-box">
            <h2>Rastreie seu Objeto</h2>
            <form class="search-group" onsubmit="buscarPacote(event)">
                <input type="text" id="codigoRastreio" placeholder="Digite o código (Ex: FLUX123456789BR)" required>
                <button type="submit" class="btn-rastrear">Buscar</button>
            </form>
        </div>
    </section>

    <!-- Acesso Rápido -->
    <section class="quick-access">
        <div class="card-quick">
            <span class="icon">📦</span>
            <h3>Calcular Frete</h3>
            <p>Simule preços e prazos de entrega para todo o Brasil.</p>
        </div>
        <div class="card-quick">
            <span class="icon">📍</span>
            <h3>Buscar Agência</h3>
            <p>Encontre o ponto de coleta Via Flux mais próximo de você.</p>
        </div>
        <div class="card-quick">
            <span class="icon">🚚</span>
            <h3>Coleta em Casa</h3>
            <p>Agende a retirada da sua encomenda sem sair de casa.</p>
        </div>
        <div class="card-quick">
            <span class="icon">📱</span>
            <h3>App Via Flux</h3>
            <p>Baixe o aplicativo e acompanhe tudo em tempo real.</p>
        </div>
    </section>

    <!-- Seção de Soluções e Vantagens -->
    <section class="solutions">
        <div class="container-solutions">
            <div class="solutions-image"></div>
            <div class="solutions-text">
                <h2>Tecnologia que move o seu negócio</h2>
                <p>Seja você uma pessoa física enviando um presente ou um e-commerce despachando milhares de pedidos diários, a Via Flux possui a infraestrutura perfeita para garantir que a sua entrega chegue segura e dentro do prazo.</p>
                <ul>
                    <li>Logística Reversa Simplificada</li>
                    <li>Integração de APIs para E-commerce</li>
                    <li>Frota Sustentável e Rastreamento GPS 24/7</li>
                    <li>Seguro Automático para todos os pacotes</li>
                </ul>
                <a href="#" class="btn-outline">Conheça nossas Soluções Corporativas</a>
            </div>
        </div>
    </section>

    <!-- Rodapé -->
    <footer>
        <div class="footer-grid">
            <div class="footer-col">
                <h4>Sobre a Via Flux</h4>
                <ul>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Sustentabilidade</a></li>
                    <li><a href="#">Trabalhe Conosco</a></li>
                    <li><a href="#">Imprensa</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Acesso Rápido</h4>
                <ul>
                    <li><a href="#">Rastreamento</a></li>
                    <li><a href="#">Calculador de Preços</a></li>
                    <li><a href="#">Busca Cep</a></li>
                    <li><a href="#">Central de Reclamações</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>E-commerce e Empresas</h4>
                <ul>
                    <li><a href="#">Seja um Parceiro</a></li>
                    <li><a href="#">Integração de Sistemas</a></li>
                    <li><a href="#">Via Flux Log</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Ajuda e Suporte</h4>
                <ul>
                    <li><a href="#">Perguntas Frequentes</a></li>
                    <li><a href="#">Fale Conosco</a></li>
                    <li><a href="#">Ouvidoria</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Via Flux S.A. | CNPJ: 00.000.000/0000-00. Todos os direitos reservados.</p>
        </div>
    </footer>

    <!-- Script Simples para o Rastreamento funcionar visualmente -->
    <script>
        function buscarPacote(event) {
            event.preventDefault();
            const codigo = document.getElementById('codigoRastreio').value;
            alert('Buscando informações em tempo real para o código: ' + codigo.toUpperCase() + '\n\nStatus Atual: Em trânsito para a cidade de destino. \nPrevisão de entrega: na velocidade da luz!');
        }
    </script>
</body>
</html>
