# ---
# if you using windows then change `clear` to `cls`
clean: 
	clear

# development

# testing

# production
build: clean
	docker build . -t next-starter

run: clean
	docker run -d -p 3000:3000 --name nextjs-run next-starter