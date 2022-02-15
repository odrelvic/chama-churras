import { View, Text, StyleSheet } from "react-native";
import GeneratePDF from "../../components/GeneratePDF";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import NavButton from "../../components/NavButton";


const Results = () => {
	return (
		<>
			<Header />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Resultado:</Text>
				</View>

					<Text style={styles.peopleTextContent}>Homens:</Text>
					<Text style={styles.peopleTextContent}>Mulheres:</Text>
					<Text style={styles.peopleTextContent}>Crianças:</Text>
					{/* Aqui ia ser legal um tipo de planilha, pra mostrar a quantidade e a medida,(KG por ex)
					à respeito da quantidade de carne a ser consumida no churras. Tipo uma notinha fiscal,
					resumindo ksks  */}

				</View>

			
				


				<View style={styles.containerButton}>
					<GeneratePDF />
					<Text style={styles.smallTextPDF}>Clique em "Gerar PDF para ter informações mais precisas.</Text>
				</View>

				

				{/* <View style={styles.content}> <=== comentado para não apagar e não ter confusão
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={styles.containerList}>
						<ItemsList item="Carvão" />
						<ItemsList item="Sal" />
						<ItemsList item="Arroz" />
						<ItemsList item="Abacaxi" />
						<ItemsList item="Sei lá" />
						<ItemsList item="JBL do Neymar" />
					</View> */}

					
				{/* </View> <- esse view é do ItemsList*/}
			
		</>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
	},
	pageTop: {
		height: 70,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	pageName: {
		fontSize: 17,
	},
	content: {
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		fontSize: 28,
		letterSpacing: 1,
		margin: 20,
	},
	containerList: {
		width: "80%",
		minHeight: 360,
		alignItems: "center",
	},
	containerButton: {
		margin: 20,
		alignItems: "center",
	},
	peopleTextContent: {
		fontSize: 18,
		alignItems: "center",
	},
	smallTextPDF: {
		fontSize: 14,
		alignItems: "center",
	},

});

export default Results;
