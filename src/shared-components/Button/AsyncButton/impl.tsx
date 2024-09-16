import { Button, ButtonBaseProps } from '@core';
import { useCallback, useMemo } from 'react';
import { AsyncButtonProps } from './types';

export function AsyncButton({ asyncOnClick, ...props }: AsyncButtonProps) {
	// const [, setProcessing] = useState<boolean>(false);
	const buttonProps = useMemo(() => props as ButtonBaseProps, [props]);

	const onProcessingOnClick = useCallback(() => {
		// setProcessing(true);
		if (asyncOnClick !== undefined) {
			asyncOnClick().finally(() => {
				// setProcessing(false);
			});
		} else {
			// setProcessing(false);
		}
	}, [asyncOnClick]);

	return <Button onClick={onProcessingOnClick} {...buttonProps} />;
}
