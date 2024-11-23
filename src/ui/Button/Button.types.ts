export type Variant = 'primary' | 'subtle' | 'secondary' | 'text';

export type Size = 'large' | 'medium' | 'small';

export type ButtonProps = {
	variant?: Variant;
	size?: Size;
	loading?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type StyledButtonProps = {
	$variant: Variant;
	$size: Size;
	$loading?: boolean;
};
