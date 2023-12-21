// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {

		var puzzleData = [
			 	{
					clue: "это наука о воспитании и образовании",
					answer: "Педагогика",
					position:1,
					orientation: "across",
					startx: 3,
					starty: 1
				},
			{
				clue: "....- целенаправленный педагогический процесс организации и стимулирования активной учебно-познавательной деятельности учащихся по овладению знаниями, умениями и навыками, развитию творческих способностей и нравственных этических взглядов.",
				answer: "обучение",
				position: 2,
				orientation: "down",
				startx: 8,
				starty: 1
			},
				{
					clue: "....-в педагогике называют человека с носителем сознания и самосознания, способного на самостоятельную преобразующую деятельность.",
					answer: "личность",
					position: 3,
					orientation: "across",
					startx: 6,
					starty: 4
				},

			{
				clue: "....-главное должностное лицо в школе",
				answer: "директор",
				position: 4,
				orientation: "across",
				startx: 5,
				starty: 5
			},
			{
				clue: "....-философское направление, зародившееся в конце XIX века, акцентирующее внимание на практической полезности, результативности и опыте в оценке и понимании явлений.",
				answer: "прогматизм",
				position: 5,
				orientation: "across",
				startx: 1,
				starty: 7
			},
			{
				clue: "....-полученные учеником в процессе взаимодействия с окружающим миром и обучения",
				answer: "опыт",
				position: 6,
				orientation: "down",
				startx: 1,
				starty: 6
			},
			{
				clue: "В 1911 году в Жумгале, близ села Куланак, появилась школа .....",
				answer: "Курмана",
				position: 7,
				orientation: "down",
				startx: 2,
				starty: 5
			},
			{
				clue: "Государство в IV веке до н.э., в котором был достигнут высокий уровень развития культуры. Здесь успешно развивались математика и астрономия, а также была создана оригинальная письменность.",
				answer: "междуречье",
				position: 8,
				orientation: "down",
				startx: 10,
				starty: 7
			},
			{
				clue: "это совокупность способов целесообразного проведения какой-либо работы.",
				answer: "методика",
				position: 9,
				orientation: "across",
				startx: 6,
				starty: 10
			},
			{
				clue: "направленность внимания педагога на воспитательную цель и выстраивание системы педагогических воздействий во взаимодействии с детьми в согласии с идеальным представлением о конечном результате профессиональной деятельности.",
				answer: "стратегия",
				position: 10,
				orientation: "down",
				startx: 13,
				starty: 7
			},
			{
				clue: "представляет собой процесс изменения и роста учеников в различных аспектах и сферах их жизни. ",
				answer: "развитие",
				position: 11,
				orientation: "across",
				startx: 3,
				starty: 13
			},
			{
				clue: "специально управляемый процесс формирования человека, осуществляемый в учебно-воспитательных учреждениях на развитие личности.",
				answer: "воспитание",
				position: 12,
				orientation: "across",
				startx: 1,
				starty: 16
			},

			{
				clue: "это совокупность способов целесообразного проведения какой-либо работы.",
				answer: "оценка",
				position: 13,
				orientation: "down",
				startx: 2,
				starty: 16
			},

		]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)
