import React from "react";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotrons";
import { Feature } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited Films, TV Programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at anytime.
          </Feature.Subtitle>
          <OptForm>
            <OptForm.Input placeholder="Email Address"></OptForm.Input>
            <OptForm.Button>Try it Now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
