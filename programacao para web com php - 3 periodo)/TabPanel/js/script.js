function mostrar_abas(obj) {
	switch (obj.id) {
		case "menu01":
		document.getElementById("menu01").style.background = '#000';
		document.getElementById("menu01").style.borderTopLeftRadius = '7px';
		document.getElementById("menu01").style.borderTopRightRadius = '7px';
		document.getElementById("menu01").style.borderTop = 'solid 1px #fff';
		document.getElementById("menu01").style.borderLeft = 'solid 1px #fff';
		document.getElementById("menu01").style.borderRight = 'solid 1px #fff';

		document.getElementById("menu02").style.background = 'none';
		document.getElementById("menu02").style.borderRadius = 'none';
		document.getElementById("menu02").style.border = 'none';

		document.getElementById("menu03").style.background = 'none';
		document.getElementById("menu03").style.borderRadius = 'none';
		document.getElementById("menu03").style.border = 'none';

		document.getElementById("menu04").style.background = 'none';
		document.getElementById("menu04").style.borderRadius = 'none';
		document.getElementById("menu04").style.border = 'none';

		document.getElementById("mostra01").style.display = 'block';
		document.getElementById("mostra02").style.display = 'none';
		document.getElementById("mostra03").style.display = 'none';
		document.getElementById("mostra04").style.display = 'none';
		break

		case "menu02":
		document.getElementById("menu02").style.background = '#000';
		document.getElementById("menu02").style.borderTopLeftRadius = '7px';
		document.getElementById("menu02").style.borderTopRightRadius = '7px';
		document.getElementById("menu02").style.borderTop = 'solid 1px #fff';
		document.getElementById("menu02").style.borderLeft = 'solid 1px #fff';
		document.getElementById("menu02").style.borderRight = 'solid 1px #fff';

		document.getElementById("menu01").style.background = 'none';
		document.getElementById("menu01").style.borderRadius = 'none';
		document.getElementById("menu01").style.border = 'none';

		document.getElementById("menu03").style.background = 'none';
		document.getElementById("menu03").style.borderRadius = 'none';
		document.getElementById("menu03").style.border = 'none';

		document.getElementById("menu04").style.background = 'none';
		document.getElementById("menu04").style.borderRadius = 'none';
		document.getElementById("menu04").style.border = 'none';

		document.getElementById("mostra02").style.display = 'block';
		document.getElementById("mostra01").style.display = 'none';
		document.getElementById("mostra03").style.display = 'none';
		document.getElementById("mostra04").style.display = 'none';
		break

		case "menu03":
		document.getElementById("menu03").style.background = '#000';
		document.getElementById("menu03").style.borderTopLeftRadius = '7px';
		document.getElementById("menu03").style.borderTopRightRadius = '7px';
		document.getElementById("menu03").style.borderTop = 'solid 1px #fff';
		document.getElementById("menu03").style.borderLeft = 'solid 1px #fff';
		document.getElementById("menu03").style.borderRight = 'solid 1px #fff';

		document.getElementById("menu01").style.background = 'none';
		document.getElementById("menu01").style.borderRadius = 'none';
		document.getElementById("menu01").style.border = 'none';

		document.getElementById("menu02").style.background = 'none';
		document.getElementById("menu02").style.borderRadius = 'none';
		document.getElementById("menu02").style.border = 'none';

		document.getElementById("menu04").style.background = 'none';
		document.getElementById("menu04").style.borderRadius = 'none';
		document.getElementById("menu04").style.border = 'none';

		document.getElementById("mostra03").style.display = 'block';
		document.getElementById("mostra01").style.display = 'none';
		document.getElementById("mostra02").style.display = 'none';
		document.getElementById("mostra04").style.display = 'none';
		break

		case "menu04":
		document.getElementById("menu04").style.background = '#000';
		document.getElementById("menu04").style.borderTopLeftRadius = '7px';
		document.getElementById("menu04").style.borderTopRightRadius = '7px';
		document.getElementById("menu04").style.borderTop = 'solid 1px #fff';
		document.getElementById("menu04").style.borderLeft = 'solid 1px #fff';
		document.getElementById("menu04").style.borderRight = 'solid 1px #fff';

		document.getElementById("menu01").style.background = 'none';
		document.getElementById("menu01").style.borderRadius = 'none';
		document.getElementById("menu01").style.border = 'none';

		document.getElementById("menu02").style.background = 'none';
		document.getElementById("menu02").style.borderRadius = 'none';
		document.getElementById("menu02").style.border = 'none';

		document.getElementById("menu03").style.background = 'none';
		document.getElementById("menu03").style.borderRadius = 'none';
		document.getElementById("menu03").style.border = 'none';

		document.getElementById("mostra04").style.display = 'block';
		document.getElementById("mostra01").style.display = 'none';
		document.getElementById("mostra02").style.display = 'none';
		document.getElementById("mostra03").style.display = 'none';

	}
}