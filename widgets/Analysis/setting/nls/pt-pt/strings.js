﻿define(
   ({
    selectAnalysisTools:"Selecione ferramentas de análise para serem listadas no widget.",
    selected: "selecionadas",
    name: "Nome",
    graphicalDisplay:"Exibição gráfica",
    usage: "Utilização",
    toolNotAvailable: "Esta ferramenta não se encontra disponível porque o mapa não contém a(s) camada(s) de elementos necessária(s).",
    aggregatePoints:"Pontos Agregados",
    aggregatePointsUsage:"Agregue pontos nos polígonos em que os pontos estão localizados.",
    aggregatePointsInputTip: "Especifique a camada de elemento de ponto que será agregada nos polígonos na camada de elementos de polígono.",
    calculateDensity:"Calcular Densidade",
    calculateDensityUsage:"Crie um mapa de densidade a partir de elementos de ponto ou linha distribuindo quantidades conhecidas de determinado fenómeno(representado como atributos dos pontos ou linhas) pelo mapa.",
    calculateDensityInputTip:"Especifique os elementos de ponto ou linha a partir dos quais calcular a densidade.",
    connectOriginsToDestinations: "Ligar Origens a Destinos",
    connectOriginsToDestinationsUsage: "Meça o tempo ou distância de viagem entre pares de pontos.",
    connectOriginsToDestinationsInputTip: "Especifique o ponto ou pontos de partida das rotas a gerar.",
    createBuffers:"Criar Buffers",
    createBuffersUsage:"Crie polígonos de buffer a partir de elementos de entrada.",
    createBuffersInputTip:"Especifique a camada de ponto, linha ou polígono para criar buffer.",
    createDriveTimeAreas:"Criar Áreas de Tempo de Condução",
    createDriveTimeAreasUsage:"Crie polígonos de tempo de condução (ou distância de condução) à volta de pontos de entrada para os valores de tempo de condução.",
    createDriveTimeAreasInputTip:"Especifique os pontos em que as áreas de tempo de condução serão desenhadas.",
    createViewshed:"Criar Viewshed",
    createViewshedUsage:"Cria áreas que são visíveis com base em localizações especificadas por si.",
    createViewshedInputTip:"Especifique as localizações de observação para identificar áreas visíveis.",
    createWatersheds:"Criar Watersheds",
    createWatershedsUsage:"Cria áreas de captação com base em localizações especificadas por si.",
    createWatershedsInputTip:"Especifique os elementos de ponto utilizados para calcular watersheds.",
    deriveNewLocations:"Derivar Novos locais",
    deriveNewLocationsUsage:"Derive novos elementos a partir das camadas de entrada que correspondam a umaconsulta especificada por si",
    deriveNewLocationsInputTip:"Especifique a camada de análise para utilizar como entrada.",
    dissolveBoundaries:"Dissolver Limites",
    dissolveBoundariesUsage:"Dissolva polígonos que se sobreponham ou que partilhem um limite comum.",
    dissolveBoundariesInputTip:"Especifique a camada que contém os elementos de polígono a dissolver.",
    enrichLayer:"Enriquecer Camada",
    enrichLayerUsage:"Enriqueça elementos de entrada com factos sobre pessoas, locais e negócios em áreas aproximadas.",
    enrichLayerInputTip:"Especifique os elementos a enriquecer com novos dados.",
    extractData:"Extrair Dados",
    extractDataDesc:"Extraia dados de uma ou mais camadas dentro de uma determinada extensão",
    extractDataInputTip:"Especifique a camada de elementos de entrada a extrair.",
    findExistingLocations:"Encontrar Locais Existentes",
    findExistingLocationsUsage:"Selecione elementos na camada de entrada que correspondam a um atributo e/ou consulta espacial especificados por si.",
    findExistingLocationsInputTip:"Especifique as camadas de análise a utilizar como entrada.",
    findHotSpots:"Encontrar Hot Spots",
    findHotSpotsUsage:"Encontre clusters estatisticamente significativos de elementos de entrada ou de valores altos/baixos.",
    findHotSpotsInputTip:"Especifique a camada de elementos de pontos ou polígonos para a qual os hot spots serão calculados.",
    findNearest:"Localizar Próximo",
    findNearestUsage:"Para cada elemento numa camada de entrada, encontre o respetivo elemento mais próximo noutra camada.",
    findNearestInputTip:"Especifique os elementos de ponto, linha ou polígono a partir dos quais as localizações mais próximas são encontradas.",
    findSimilarLocations:"Encontrar Locais Semelhantes",
    findSimilarLocationsUsage:"Meça a semelhança de locais candidados a uma ou mais localizações de referência.",
    findSimilarLocationsInputTip:"Especifique uma camada de elementos que contenha um ou mais locais de referência em relação aos quais os elementos na camada selecionada serão avaliados por semelhança.",
    interpolatePoints:"Interpolar Pontos",
    interpolatePointsUsage:"Preveja valores em novos locais com base em medições de uma coleção de pontos.",
    interpolatePointsInputTip:"Especifique os elementos de ponto que serão interpolados.",
    mergeLayers:"Juntar Camadas",
    mergeLayersUsage:"Junte elementos a partir de várias camadas numa nova camada.",
    mergeLayersInputTip:"Especifique a camada de elementos a juntar à camada fundida.",
    overlayLayers:"Sobrepor Camadas",
    overlayLayersUsage:"Combine várias camadas numa única camada garantindo a preservação das informações das camadas originais.",
    overlayLayersInputTip:"Especifique a camada de elementos que será sobreposta pela camada de sobreposição.",
    planRoutes:"Planear Rotas",
    planRoutesUsage:"Determine como dividir as tarefas de uma força de trabalho móvel de forma eficiente.",
    planRoutesInputTip:"Especifique os pontos que os veículos, condutores ou rotas devem visitar.",
    summarizeNearby:"Resumir Próximo",
    summarizeNearbyUsage:"Por cada elemento numa camada de entrada, resuma dados a uma distância de elementos noutra camada.",
    summarizeNearbyInputTip:"Especifique a camada de elementos de ponto, linha ou polígono a partir da qual as distâncias serão medidas para elementos na camada de resumo.",
    summarizeWithin:"Resumir Dentro",
    summarizeWithinUsage:"Para cada polígono numa camada de saída, resuma dados localizados dentro da mesma com elementos noutra camada.",
    summarizeWithinInputTip:"Especifique a camada de elementos de polígono a ser resumida.",
    traceDownstream:"Trace Downstream",
    traceDownstreamUsage:"Determine os caminhos dos fluxos numa direção a jusante dos locais que especificou.",
    traceDownstreamInputTip:"Especifique os elementos de ponto utilizados como local inicial de uma downstream trace."
  })
);