# react-action-modal-hook

## NOTE

采用`dialog`標簽的簡約 React Modal Hook

歡迎在`issue`內提出各類建議。

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

`npm` 或 `yarn` 命令可進行安裝。

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

|                      | Type                                      | Description                                                                                              | Required |
| :------------------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------- | :------- |
| `ModalComponent`     | React.FC                                  | 已注冊的 Modal Component                                                                                 |          |
| `openModal`          | () => void                                | 打開 Modal                                                                                               |          |
| `closeModal`         | () => void                                | 關閉 Modal                                                                                               |
| `isModalOpen`        | boolean                                   | Modal 的開關狀態                                                                                         |          |
| `dialogElement`      | HTMLDialogElement                         | 包裹 Modal 的 Dialog 要素                                                                                |          |
| `ModalTemplateProps` | object type                               | 注冊 Modal 模版的 Props                                                                                  |          |
| `ModalTemplate`      | React.FC                                  | 注冊 Modal 模版                                                                                          | ⚪︎      |
| `closeDelay`         | () => number                              | 從`closeModal`開始執行到關閉 Modal 的延遲毫秒數（ms） <br/>默認值：`() => 0` <br/>※用於動畫用            |          |
| `onClose`            | (HTMLDialogElement) => void \| () => void | 關閉 Modal 時觸發。當執行 `closeModal` 後，將執行 `onClose`。`onClose` 返回的函數將在 Modal 關閉後執行。 |          |
| `disableEsc`         | boolean                                   | 防止使用 Esc 鍵關閉 Modal。默認值為 false。                                                              |          |
| `unlockBodyScroll`   | boolean                                   | Modal 打開時，不鎖定 Body 的滾動。默認值為 false。                                                       |          |

## Styles

### Import CSS

導入所需的 CSS

```js
import 'react-action-modal-hook/styles';
```

### Customize CSS

當然，您可以自行進行 CSS 的自定義。
| ClassName | Description |
| :---------------------- | :--------------------------------------------------------- |
| `use-modal-container` | `dialog` 的默認樣式 |
| `use-modal-scroll-lock` | 鎖定`body`滾動所需的樣式 |

## Global Settings

添加`ModalProvider`

```js
<ModalProvider>
  <Component />
</ModalProvider>
```

以下為`ModalProvider`的`props`

|      | Description                                                                               |
| :--- | :---------------------------------------------------------------------------------------- |
| key  | `React.createPortal()`的`key`。[參考](https://react.dev/reference/react-dom/createPortal) |
| 其他 | `HTMLDialogElement`的所有屬性                                                             |

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
