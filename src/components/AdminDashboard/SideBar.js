import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
            href: "/admin-dashboard"
		},
		{
			text: "Users Manage",
			icon: "icons/user.svg",
            href: "/admin-users"
		},
		{
			text: "Sales History",
			icon: "icons/message.svg",
            href: "/admin-sales"
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
            href: "/hola"
		},
		{
			text: "Products",
			icon: "icons/folder.svg",
            href: "/admin-products"
		},
		{
			text: "New Product",
			icon: "icons/folder.svg",
            href: "/admin-products-form"
		},
		{
			text: "FAQ",
			icon: "icons/shopping-cart.svg",
            href: "/admin-faq"
		},
	
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>admin</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon, href }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href={href}
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideBar;
