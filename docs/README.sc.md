# react-action-modal-hook

## NOTE

采用`dialog`标签的简约 React Modal Hook

欢迎在`issue`内提出各类建议。

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

`npm` 或 `yarn` 命令可进行安装。

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
| `ModalComponent`     | React.FC                                  | 已注册的 Modal Component                                                                                 |          |
| `openModal`          | () => void                                | 打开 Modal                                                                                               |          |
| `closeModal`         | () => void                                | 关闭 Modal                                                                                               |
| `isModalOpen`        | boolean                                   | Modal 的开关状态                                                                                         |          |
| `dialogElement`      | HTMLDialogElement                         | 包裹 Modal 的 Dialog 要素                                                                                |          |
| `ModalTemplateProps` | object type                               | 注册 Modal 模版的 Props                                                                                  |          |
| `ModalTemplate`      | React.FC                                  | 注册 Modal 模版                                                                                          | ⚪︎      |
| `closeDelay`         | () => number                              | 从`closeModal`开始执行到关闭 Modal 的延迟毫秒数（ms） <br/>默认值：`() => 0` <br/>※用于动画用            |          |
| `onClose`            | (HTMLDialogElement) => void \| () => void | 关闭 Modal 时触发。当执行 `closeModal` 后，将执行 `onClose`。`onClose` 返回的函数将在 Modal 关闭后执行。 |          |
| `disableEsc`         | boolean                                   | 防止使用 Esc 键关闭 Modal。默认值为 false。                                                              |          |
| `unlockBodyScroll`   | boolean                                   | Modal 打开时，不锁定 Body 的滚动。默认值为 false。                                                       |          |

## Styles

### Import CSS

导入所需的 CSS

```js
import 'react-action-modal-hook/styles';
```

### Customize CSS

当然，您可以自行进行 CSS 的自定义。
| ClassName | Description |
| :---------------------- | :--------------------------------------------------------- |
| `use-modal-container` | `dialog` 的默认样式 |
| `use-modal-scroll-lock` | 锁定`body`滚动所需的样式 |

## Global Settings

添加`ModalProvider`

```js
<ModalProvider>
  <Component />
</ModalProvider>
```

以下为`ModalProvider`的`props`

|      | Description                                                                               |
| :--- | :---------------------------------------------------------------------------------------- |
| key  | `React.createPortal()`的`key`。[参考](https://react.dev/reference/react-dom/createPortal) |
| 其他 | `HTMLDialogElement`的所有属性                                                             |

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
