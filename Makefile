git:
	@git add .
	@git commit -m "automated push"
	@git push origin HEAD:main

serve:
	@npm run dev