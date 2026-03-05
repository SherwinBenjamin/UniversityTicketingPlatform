/*eslint-disable*/
import { useSearchParams } from "react-router-dom";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./dropdown-menu";
import React from "react";

type Option = {
	value: string;
	label: string;
};

function FilterButton({
	filterField,
	options,
	buttonLabel,
	styles,
	setterFunction,
}: {
	styles?: string;
	filterField: string;
	buttonLabel: string;
	options: Option[];
	setterFunction: React.Dispatch<React.SetStateAction<string>>;
}) {
	const [searchParams, setSearchParams] = useSearchParams();

	const currentFilterValue = searchParams.get(filterField) || "";

	function handleClick(value: any) {
		searchParams.set(filterField, value);
		setterFunction(value);
		setSearchParams(searchParams.toString());
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={`${styles} uppercase text-white bg-[#1D4ED8] py-2 px-6 outline-none rounded-[.3rem]`}
			>
				{buttonLabel}
			</DropdownMenuTrigger>
			<DropdownMenuContent className=" bg-white">
				{options.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onClick={() => handleClick(option.value)}
						className={currentFilterValue === option.value ? "active" : ""}
						disabled={currentFilterValue === option.value}
					>
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default FilterButton;
