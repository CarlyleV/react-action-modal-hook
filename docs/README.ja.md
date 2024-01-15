# react-action-modal-hook

## NOTE

`dialog`タグを使用した自由度の高い react hook

ぜひ`issue`にて、ご意見をいただきたい。

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

`npm` または、`yarn` でインストール可能である。

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

|                      | Type                                      | Description                                                                                                                                                   | Required |
| :------------------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------- |
| `ModalComponent`     | React.FC                                  | 登録されたモーダルテンプレートのコンポーネント                                                                                                                |          |
| `openModal`          | () => void                                | モーダルを開く                                                                                                                                                |          |
| `closeModal`         | () => void                                | モーダルを閉じる                                                                                                                                              |          |
| `isModalOpen`        | boolean                                   | モーダルの開閉状態                                                                                                                                            |          |
| `dialogElement`      | HTMLDialogElement                         | モーダルをラップする Dialog 要素                                                                                                                              |          |
| `ModalTemplateProps` | object type                               | 登録するモーダルテンプレートの Props                                                                                                                          |          |
| `ModalTemplate`      | React.FC                                  | 登録するモーダルのテンプレート                                                                                                                                | ⚪︎      |
| `closeDelay`         | () => number                              | `closeModal`の実行開始から、モーダルを閉じるまでの遅延ミリ秒数（ms）<br/>default: `() => 0` <br/> ※アニメーション用                                           |          |
| `onClose`            | (HTMLDialogElement) => void \| () => void | モーダルを閉じる時に実行される。<br/>`closeModal`が実行されたら、`onClose`が実行されます。`onClose`の戻り値となる関数は、モーダルが閉じられたら、実行される。 |          |
| `disableEsc`         | boolean                                   | `Esc`でモーダルを閉じられないようにする<br/>default: `false`                                                                                                  |          |
| `unlockBodyScroll`   | boolean                                   | モーダルが開かれた時、Body のスクロールをロックしないようにする<br/>default: `false`                                                                          |          |

## Styles

### Import CSS

動作に必要な CSS をインポートする

```js
import 'react-action-modal-hook/styles';
```

### Customize CSS

もちろんご自身で、CSS をカスタマイズすることは可能である。
| ClassName | Description |
| :---------------------- | :--------------------------------------------------------- |
| `use-modal-container` | `dialog`タグのデフォルトスタイル |
| `use-modal-scroll-lock` | `body` のスクロールをロックする時に、`body` に付与するスタイル |

## Global Settings

`ModalProvider`を追加

```js
<ModalProvider>
  <Component />
</ModalProvider>
```

以下は`ModalProvider`の`props`

|        | Description                                                                                        |
| :----- | :------------------------------------------------------------------------------------------------- |
| key    | `React.createPortal()`の`key`にする。[参考](https://ja.react.dev/reference/react-dom/createPortal) |
| その他 | `HTMLDialogElement`の属性                                                                          |

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
