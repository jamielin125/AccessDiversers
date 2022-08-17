<template>
	<div class="container">
		<button
			v-for="i in num"
			class="btn"
			tabindex="1"
			:disabled="i === num"
		></button>

		<div>focus 顯示紅色，active 顯示粗體</div>
		<button class="btn-desc">
			When clicked, my text turns red AND bold!<br />
			But not when focused only,<br />
			where my text just turns red
		</button>
	</div>

	<form class="mt-4">
		<div class="container">
			<label for="uname"><b>Username</b></label>
			<input id="uname" type="text" placeholder="Enter Username" name="uname" required>

			<label for="psw"><b>Password</b></label>
			<input id="psw" type="password" placeholder="Enter Password" name="psw" required>

			<button type="submit">Login</button>
		</div>
	</form>
</template>

<script setup>
const num = 5;
</script>

<style lang="scss">
.container {
	display: grid;
	gap: 12px
}
.btn {
	--state-text: 'default';
	display: block;
	padding: 20px;
	border: 1px solid #333;
	border-radius: 4px;
	background-color: #eeeeee;
	user-select: none;
	transition: transform .1s ease-out;
	&:after {
		content: var(--state-text);
	}
	&:disabled {
		--state-text: 'disabled';
		color: #cccccc;
	}
	&:not(:disabled) {
		cursor: pointer;
		// hover
		@media (hover: hover) {
			&:hover {
				--state-text: 'hover';
				background-color: #cccccc;
				transform: translateY(-2px);
			}
		}
		// active
		&:active {
			--state-text: 'active';
			background-color: #333333;
			color: #ffffff;
			transform: translateY(4px);
		}
		// focus
		&:focus:not(:focus-visible) { // remove outline for non-keyboard :focus
			outline: none;
		}
		&:focus-visible { // focus with keyboard tab
			outline: 3px dashed red;
			outline-offset: 3px;
		}
	}
}

.btn-desc {
	background: lightgray;
	&:focus { color: red; }
	&:active { font-weight: bold; }
}

form {
	&:focus-within {
		border: 2px purple solid;
	}
}
</style>