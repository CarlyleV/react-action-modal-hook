# react-action-modal-hook

## NOTE

A minimalist React Modal Hook using the dialog tag.

Feel free to provide various suggestions within the issue.

[日本語](https://github.com/CarlyleV/react-action-modal-hook/blob/main/docs/README.ja.md)
[简体中文](https://github.com/CarlyleV/react-action-modal-hook/blob/main/docs/README.sc.md)
[繁體中文](https://github.com/CarlyleV/react-action-modal-hook/blob/main/docs/README.tc.md)

## Usage

```jsx
type Props = {
  disableEsc: boolean,
  unlockBodyScroll: boolean,
};

export const BlurModalTrigger: FC<Props> = ({
  disableEsc = false,
  unlockBodyScroll = false,
}) => {
  const [isClosing, setIsClosing] = useState < boolean > false;

  const onClose: UseModalEventHandler = () => {
    // Blur Modal Start Closing
    setIsClosing(true);
    return () => {
      // Blur Modal Closed
      setIsClosing(false);
    };
  };

  const closeDelay = () => {
    return 200;
  };

  const [Modal, openModal, closeModal] = useModal(BlurModal, {
    closeDelay,
    onClose,
    disableEsc,
    unlockBodyScroll,
  });

  return (
    <>
      <Button onClick={openModal}>Open Blur Modal</Button>
      <Modal title='Blur Modal' {...{ isClosing, closeModal }}>
        <p>
          Duis cursus ex non ante porta, id maximus lorem luctus. Pellentesque
          nec mauris sed odio mollis congue id sit amet nibh.
        </p>
      </Modal>
    </>
  );
};
```

## Installation

You can install using `npm` or `yarn` commands.

```zsh
npm install --save react-action-modal-hook
yarn add react-action-modal-hook
```

## Syntax

```js
[ModalComponent, openModal, closeModal, isModalOpen, dialogElement] = useModal<ModalTemplateProps>(
  ModalTemplate,
  {
    closeDelay,
    onClose,
    disableEsc,
    unlockBodyScroll,
  },
);
```

|                      | Type                                      | Description                                                                                                                                     | Required |
| :------------------- | :---------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :------- |
| `ModalComponent`     | React.FC                                  | Registered Modal Component                                                                                                                      |          |
| `openModal`          | () => void                                | Open the Modal                                                                                                                                  |          |
| `closeModal`         | () => void                                | Close the Modal                                                                                                                                 |
| `isModalOpen`        | boolean                                   | Modal's toggle state                                                                                                                            |          |
| `dialogElement`      | HTMLDialogElement                         | Dialog element wrapping the Modal                                                                                                               |          |
| `ModalTemplateProps` | object type                               | Props for the registered Modal template                                                                                                         |          |
| `ModalTemplate`      | React.FC                                  | Register Modal template                                                                                                                         | ⚪︎      |
| `closeDelay`         | () => number                              | Milliseconds delay from `closeModal` start to the Modal closing <br/> Default: `() => 0` <br/> Used for animations                              |          |
| `onClose`            | (HTMLDialogElement) => void \| () => void | Triggered when the Modal is closed. Executed after `closeModal`. The function returned by `onClose` will be executed after the Modal is closed. |          |
| `disableEsc`         | boolean                                   | Prevent closing the Modal using the `Esc` key. Default is `false`.                                                                              |          |
| `unlockBodyScroll`   | boolean                                   | Do not lock Body scroll when the Modal is open. Default is `false`.                                                                             |          |

## Styles

### Import CSS

Import the CSS used by the library.

```js
import 'react-action-modal-hook/styles';
```

### Customize CSS

You can customize the CSS as needed.
| ClassName | Description |
| :---------------------- | :--------------------------------------------------------- |
| `use-modal-container` | `dialog` 的默认样式 |
| `use-modal-scroll-lock` | 锁定`body`滚动所需的样式 |

## Global Settings

Add `ModalProvider`

```js
<ModalProvider>
  <Component />
</ModalProvider>
```

The following are the props for `ModalProvider`

|        | Description                                                                                      |
| :----- | :----------------------------------------------------------------------------------------------- |
| key    | `key` for `React.createPortal()`.[Reference](https://react.dev/reference/react-dom/createPortal) |
| others | All attributes of `HTMLDialogElement`                                                            |

## Example

```js
import 'react-action-modal-hook/styles';

type BlurModalProps = {
  children: ReactNode,
  closeModal: () => void,
  isClosing: boolean,
  title: string,
} & HTMLAttributes<HTMLDivElement>;

export const BlurModal: FC<BlurModalProps> = ({
  children,
  isClosing,
  title,
  closeModal,
  ...attributes
}) => {
  return (
    <div
      className={clsx('use-modal-container', isClosing && '-close')}
      {...attributes}
    >
      <div className={'background'} onClick={closeModal}></div>
      <section className={'modal-body'}>
        <header className={'header'}>{title}</header>
        <div className={'main'}>{children}</div>
        <footer className={'footer'}>
          <Button onClick={closeModal}>Close</Button>
        </footer>
      </section>
    </div>
  );
};

type Props = {
  disableEsc: boolean,
  unlockBodyScroll: boolean,
};

export const BlurModalTrigger: FC<Props> = ({
  disableEsc = false,
  unlockBodyScroll = false,
}) => {
  const [isClosing, setIsClosing] = useState < boolean > false;

  const onClose: UseModalEventHandler = () => {
    // Blur Modal Start Closing
    setIsClosing(true);
    return () => {
      // Blur Modal Closed
      setIsClosing(false);
    };
  };

  const closeDelay = () => {
    return 200;
  };

  const [Modal, openModal, closeModal] = useModal(BlurModal, {
    closeDelay,
    onClose,
    disableEsc,
    unlockBodyScroll,
  });

  return (
    <>
      <Button onClick={openModal}>Open Blur Modal</Button>
      <Modal title='Blur Modal' {...{ isClosing, closeModal }}>
        <p>
          Duis cursus ex non ante porta, id maximus lorem luctus. Pellentesque
          nec mauris sed odio mollis congue id sit amet nibh.
        </p>
      </Modal>
    </>
  );
};

const App = () => {
  return (
    <ModalProvider>
      <BlurModalTrigger />
    </ModalProvider>
  );
};
```
