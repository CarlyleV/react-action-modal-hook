# react-action-modal-hook

## NOTE

采用`dialog`标签的简约 React Modal Hook

欢迎在`issue`内提出各类建议。

[Playground](https://codesandbox.io/p/devbox/morning-cookies-3kc6xw?file=%2Fsrc%2Fcomponents%2Fmodal%2Ftemplates%2FBlurModalTemplate%2Findex.tsx%3A25%2C30&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clrx7tfwo00093b6ofwyazdxy%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clrx7tfwn00023b6o8tkqvlud%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clrx7tfwn00063b6o01mxcefd%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clrx7tfwo00083b6ox5eznn6o%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clrx7tfwn00023b6o8tkqvlud%2522%253A%257B%2522id%2522%253A%2522clrx7tfwn00023b6o8tkqvlud%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrx7tfwn00013b6oaqohwagb%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Ftsconfig.json%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522cls2wt5cv00023b6o40241h0r%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A25%252C%2522startColumn%2522%253A30%252C%2522endLineNumber%2522%253A25%252C%2522endColumn%2522%253A30%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252Fcomponents%252Fmodal%252Ftemplates%252FBlurModalTemplate%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522cls2wt5cv00023b6o40241h0r%2522%257D%252C%2522clrx7tfwo00083b6ox5eznn6o%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrx7tfwo00073b6ozqhps4ji%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522clrx7tfwo00083b6ox5eznn6o%2522%252C%2522activeTabId%2522%253A%2522clrx7tfwo00073b6ozqhps4ji%2522%257D%252C%2522clrx7tfwn00063b6o01mxcefd%2522%253A%257B%2522id%2522%253A%2522clrx7tfwn00063b6o01mxcefd%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clrx7tfwn00043b6ohermvw25%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%257D%252C%257B%2522id%2522%253A%2522clrx7tfwn00053b6on6rf8too%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clrw0ewgw000pe5gg09sbg79u%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clrx7tfwn00043b6ohermvw25%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

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

  const onModalClose: OnModalClose = () => {
    // Blur Modal Start Closing
    setIsClosing(true);
    return () => {
      // Blur Modal Closed
      setIsClosing(false);
    };
  };

  const modalCloseDelay = () => {
    return 200;
  };

  const [Modal, openModal, closeModal] = useModal(BlurModal, {
    modalCloseDelay,
    onModalClose,
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
    modalCloseDelay,
    onModalClose,
    disableEsc,
    unlockBodyScroll,
  },
);
```

|                      | Type                                      | Description                                                                                                        | Required |
| :------------------- | :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------- | :------- |
| `ModalComponent`     | React.FC                                  | 已注册的 Modal Component                                                                                           |          |
| `openModal`          | () => void                                | 打开 Modal                                                                                                         |          |
| `closeModal`         | () => void                                | 关闭 Modal                                                                                                         |
| `isModalOpen`        | boolean                                   | Modal 的开关状态                                                                                                   |          |
| `dialogElement`      | HTMLDialogElement                         | 包裹 Modal 的 Dialog 要素                                                                                          |          |
| `ModalTemplateProps` | object type                               | 注册 Modal 模版的 Props                                                                                            |          |
| `ModalTemplate`      | React.FC                                  | 注册 Modal 模版                                                                                                    | ⚪︎      |
| `modalCloseDelay`    | () => number                              | 从`closeModal`开始执行到关闭 Modal 的延迟毫秒数（ms） <br/>默认值：`() => 0` <br/>※用于动画用                      |          |
| `onModalClose`       | (HTMLDialogElement) => void \| () => void | 关闭 Modal 时触发。当执行 `closeModal` 后，将执行 `onModalClose`。`onModalClose` 返回的函数将在 Modal 关闭后执行。 |          |
| `disableEsc`         | boolean                                   | 防止使用 Esc 键关闭 Modal。默认值为 false。                                                                        |          |
| `unlockBodyScroll`   | boolean                                   | Modal 打开时，不锁定 Body 的滚动。默认值为 false。                                                                 |          |

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

  const onModalClose: OnModalClose = () => {
    // Blur Modal Start Closing
    setIsClosing(true);
    return () => {
      // Blur Modal Closed
      setIsClosing(false);
    };
  };

  const modalCloseDelay = () => {
    return 200;
  };

  const [Modal, openModal, closeModal] = useModal(BlurModal, {
    modalCloseDelay,
    onModalClose,
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
