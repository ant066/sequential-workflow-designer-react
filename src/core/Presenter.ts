import { MutableRefObject } from 'react';
import ReactDOM from 'react-dom';
export class Presenter {
	public static render(className: string, rootRef: MutableRefObject<Element | null>, element: JSX.Element): HTMLElement {
		Presenter.tryDestroy(rootRef);
		const container = document.createElement('div');
		container.className = className;
		ReactDOM.render(element, container);

		return container;
	}

	public static tryDestroy(rootRef: MutableRefObject<Element | null>) {
		if (rootRef.current) {
			const oldRoot = rootRef.current;
			rootRef.current = null;

			ReactDOM.unmountComponentAtNode(oldRoot);
		}
	}
}
