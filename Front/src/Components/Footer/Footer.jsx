import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiSecurePaymentLine, RiWhatsappLine, RiMailLine} from "react-icons/ri";
import { BsCreditCard2Back, BsClock, BsFillSuitHeartFill, BsGithub } from "react-icons/bs";

const Footer = () => {
	const elements = [
		{
			title: "Fast Shipping",
			text: "Receive in 2 to 5 business days throughout Argentina",
			icon: LiaShippingFastSolid,
		},
		{
			title: "Secure Payment",
			text: "We rely on Mercado Pago, one of the safest payment processors",
			icon: RiSecurePaymentLine,
		},
		{
			title: "24/7 Support",
			text: "Contact us 24 hours a day, 7 days a week",
			icon: BsClock,
		},
		{
			title: "Flexible Payments",
			text: "Pay in up to 6 interest-free installments",
			icon: BsCreditCard2Back,
		},
	];

	const useful_links = [
		{
			title: "About Us",
			text: "We are a modern and exclusive brand of sneakers and fashion items.",
			helps: [
				{
					to: "https://wa.me/56999999999",
					title: "+56 9 9999 9999",
					icon: RiWhatsappLine,
				},
				{
					to: "mailto:info@innovoza.com",
					title: "info@innovoza.com",
					icon: RiMailLine,
				},
			],
		},
		{
			title: "Useful Links",
			helps: [
				{ to: "/aboutUs", title: "About Us" },
				{ to: "/fQuestions", title: "Frequent Questions" },
				{ to: "/measureSize", title: "How to measure your size?" },
			],
		},
	];

	return (
		<div className={styles.todo}>
			<div id={styles.container_elements}>
				{elements.map((element, index) => (
					<div key={`${index}-${element}`} className={styles.div_elements}>
						<div className={styles.ico}>
							<element.icon />
						</div>
						<div className={styles.text}>
							<h3>{element.title}</h3>
							<span>{element.text}</span>
						</div>
					</div>
				))}
			</div>

			<div id={styles.useful_links}>
				{useful_links.map((c, index) => (
					<div key={`${index}-${c}`} className={styles.useful_links_div}>
						<h3>{c.title}</h3>
						{c.text && <h4>{c.text}</h4>}
						<div className={styles.container_links}>
							{c.helps.map((help, index) => (
								<Link key={`${index}-${help}`} to={help.to}>
									{help.icon && <help.icon />}
									<span>{help.title}</span>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>

			<div className={styles.derechos}>
				<p>© INNOVOZA - 2023</p>
				{/* <p id={styles.made_whith}>
					Made with <BsFillSuitHeartFill />
				</p> */}
			</div>
		</div>
	);
};

export { Footer };