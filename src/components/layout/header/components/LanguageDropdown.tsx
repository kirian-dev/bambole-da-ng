import Button from '@/components/ui/button/Button';
import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa';
import { IoLanguageOutline } from 'react-icons/io5';
import { MdLanguage } from 'react-icons/md';

export const LanguageDropdown = () => {
	const [selectedLanguage, setSelectedLanguage] = useState('EN');
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	const selectLanguage = (language: any) => {
		setSelectedLanguage(language);
		setDropdownOpen(false);
	};

	return (
		<>
			<Button
				className="border-none  py-3 px-4"
				onClick={toggleDropdown}
				data-dropdown-toggle="dropdownLanguage"
				data-dropdown-placement="bottom"
				type="button"
			>
				EN
			</Button>
			{dropdownOpen && (
				<div
					id="dropdownLanguage"
					className="z-10 hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
				>
					<ul
						className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
						aria-labelledby="dropdownUsersButton"
					>
						<li>EN</li>
					</ul>
				</div>
			)}
		</>
	);
};
