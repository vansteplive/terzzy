import styles from "./message.module.css"
type MessageProps = {
    text: String;
}

export default function Message({text}: MessageProps) {
    return (
      <div className={styles.message}>
        <div className={styles.bubbleContainer}>
          <div className={styles.bubble}>
            { text }
          </div>
        </div>
      </div>
    );
}