# WorkShop 大綱

## Part 1. 開場
1. 環境建置
   - git
     - https://github.com/jamielin125/AccessDiversers
   - node (npm)
     - https://nodejs.org/en/
2. git clone / 直接 download zip
3. 安裝相依套件
   - `npm install`
4. 運行開發模式
   - `npm run dev`
5. Screen Reader 
   - Chrome Extension: ChromeVox

## Part 2. Intro
1. 給一個 bad accessibility example
2. 如何用 screen reader debug
3. 優化

## Part 3. HTML 簡介
- `<h>`
- `<li>`
- `<table>`
- `<a>`
- `<button>`

## Part 3 `tabindex`
- 使用 tab 取得焦點 (focus) 
- 控制 tab 的順序
- demo

## Part 4. WAI-ARIA 入門
1. `aria-hidden` (提供設計的觀點)
   - 常見適用場景，什麼時候應該用
     - svg icon 
     - `<img alt="">`
   - demo 報讀差異
2. `aria-description`
   - 補充字樣
3. `aria-label`
   - 說明會覆蓋其子元素內文字 
   - demo: menu 漢堡按鈕

## Part 5. accessibility CSS 入門
1. focus 狀態又細分三種
   1. `focus`: 點擊/觸碰 element 所產生的 focus 狀態
   2. `focus-visible`: 使用鍵盤 tab 切換至 element 產生的 focus
   3. `focus-within`: 當 element 內部有任一個 child 是 focus 狀態時，element 本身會有這個狀態
2. active 按下去 element 的狀態
3. visited 只有 `<a href=”url”>` 才會有 visited 狀態，由瀏覽器判斷此 url 連結是否有被造訪過（依據瀏覽紀錄）
   ```css
    a:visited {}
   ```

```
focus vs active 比較
:focus 表示當前選擇元素以接收輸入時的狀態
:active 表示元素當前被用戶 activated 時的狀態。

範例：
Tab 焦點在 <button> 它進入 :focus 狀態
隨後單擊（或按下space），則使按鈕進入其 :active 狀態

當你點擊一個按鈕時，同時給他 :focus 以及 :active 兩個狀態
```